import {ConnectionBackend, Connection} from '../interfaces';
import {ReadyStates, RequestMethods} from '../enums';
import {Request} from '../static_request';
import {Response} from '../static_response';
import {Inject} from 'angular2/di';
import {Injectable} from 'angular2/di';
import {BrowserXHR} from './browser_xhr';
import * as Rx from 'rx';

/** 
 * Connection class used to create connections by {@link XHRConnection}. Given a fully-qualified request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the request. 
 * 
 * This class would typically not be created or interacted with directly inside applications, though the {@link MockConnection} may be interacted with in tests.
 */
export class XHRConnection implements Connection {
  request: Request;
  /**
   * Response Subject which emits a single {@link Response} value on load event of `XMLHttpRequest`. 
   */
  response: Rx.Subject<Response>;
  readyState: ReadyStates;
  private _xhr;
  constructor(req: Request, NativeConstruct: any) {
    this.request = req;
    if (Rx.hasOwnProperty('default')) {
      this.response = new (<any>Rx).default.Rx.Subject();
    } else {
      this.response = new Rx.Subject<Response>();
    }
    this._xhr = new NativeConstruct();
    //TODO(jeffbcross): implement error listening/propagation
    this._xhr.open(RequestMethods[req.method], req.url);
    this._xhr.addEventListener(
        'load',
        () => {this.response.onNext(new Response(this._xhr.response || this._xhr.responseText))});
    // TODO(jeffbcross): make this more dynamic based on body type
    this._xhr.send(this.request.text());
  }

  /**
   * Call abort on the underlying XMLHttpRequest. This method is called implicitly when the {@link Observable} created by calling {@link Http} is unsubscribed.
   */
  dispose(): void { this._xhr.abort(); }
}

/**
 * A backend to create connections for the {@link Http} service.
 * 
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * #Example
 *
 * ```
 * @Component({
 *   appInjector: [bind(XHRBackend).toClass(MyNodeBackend), httpBindings]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 *
 * @exportedAs angular2/http
 *
 **/
@Injectable()
export class XHRBackend implements ConnectionBackend {
  constructor(private _NativeConstruct: BrowserXHR) {}
  createConnection(request: Request): XHRConnection {
    return new XHRConnection(request, this._NativeConstruct);
  }
}
