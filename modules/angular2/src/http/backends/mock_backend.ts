import {Injectable} from 'angular2/di';
import {Request} from 'angular2/src/http/static_request';
import {Response} from 'angular2/src/http/static_response';
import {ReadyStates} from 'angular2/src/http/enums';
import * as Rx from 'rx';

/**
 *
 * Connection class used by MockBackend
 * 
 * This class is typically not instantiated directly, but instances can be retrieved by subscribing to the `connections` {@link Observable} of
 * {@link MockBackend} in order to mock responses to requests.
 *  
 * @exportedAs angular2/http
 **/
export class MockConnection {
  /**
   * Observer to call on download progress, if provided in config.
   **/
  downloadObserver: Rx.Observer<Response>;

  /**
   * TODO
   * Name `readyState` should change to be more generic, and states could be made to be more
   * descriptive than XHR states.
   **/

  readyState: ReadyStates;
  request: Request;
  response: Rx.Subject<Response>;

  constructor(req: Request) {
    // State
    if (Rx.hasOwnProperty('default')) {
      this.response = new ((<any>Rx).default.Rx.Subject)();
    } else {
      this.response = new Rx.Subject<Response>();
    }

    this.readyState = ReadyStates.OPEN;
    this.request = req;
    this.dispose = this.dispose.bind(this);
  }

  dispose() {
    if (this.readyState !== ReadyStates.DONE) {
      this.readyState = ReadyStates.CANCELLED;
    }
  }

  /**
   * Send a mock response to the connection. This response is the value that is emitted to the {@link Observable} returned by {@link Http}.
   * 
   * #Example
   * 
   * ```
   * var connection;
   * backend.connections.subscribe(c => connection = c);
   * http('data.json').subscribe(res => console.log(res.text()));
   * connection.mockRespond(new Response('fake response')); //logs 'fake response'
   * ```
   * 
   */
  
  mockRespond(res: Response) {
    if (this.readyState >= ReadyStates.DONE) {
      throw new Error('Connection has already been resolved');
    }
    this.readyState = ReadyStates.DONE;
    this.response.onNext(res);
    this.response.onCompleted();
  }

  mockDownload(res: Response) {
    this.downloadObserver.onNext(res);
    if (res.bytesLoaded === res.totalBytes) {
      this.downloadObserver.onCompleted();
    }
  }

  mockError(err?) {
    // Matches XHR semantics
    this.readyState = ReadyStates.DONE;
    this.response.onError(err);
    this.response.onCompleted();
  }
}

/**
 * A mock backend for testing the {@link Http} service.
 * 
 * This class can be injected in tests, and should be used to override bindings
 * to other backends, such as {@link XHRBackend}.
 *
 * #Example
 *
 * ```
 * it('should get some data', inject([AsyncTestCompleter], (async) => {
 *   var connection;
 *   var injector = Injector.resolveAndCreate([MockBackend, bind(Http).toFactory(HttpFactory, [MockBackend])]);
 *   var http = injector.get(Http);
 *   var backend = injector.get(MockBackend);
 *   //Assign any newly-created connection to local variable
 *   backend.connections.subscribe(c => connection = c);
 *   http('data.json').subscribe((res) => {
 *     expect(res.text()).toBe('awesome');
 *     async.done();
 *   });
 *   connection.mockRespond(new Response('awesome'));
 * }));
 * ```
 *
 * @exportedAs angular2/http
 *
 **/
@Injectable()
export class MockBackend {
  connections: Rx.Subject<MockConnection>;
  connectionsArray: Array<MockConnection>;
  pendingConnections: Rx.Observable<MockConnection>;
  constructor() {
    this.connectionsArray = [];
    if (Rx.hasOwnProperty('default')) {
      this.connections = new (<any>Rx).default.Rx.Subject();
    } else {
      this.connections = new Rx.Subject<MockConnection>();
    }
    this.connections.subscribe(connection => this.connectionsArray.push(connection));
    this.pendingConnections = this.connections.filter((c) => c.readyState < ReadyStates.DONE);
  }

  verifyNoPendingRequests() {
    let pending = 0;
    this.pendingConnections.subscribe((c) => pending++);
    if (pending > 0) throw new Error(`${pending} pending connections to be resolved`);
  }

  resolveAllConnections() { this.connections.subscribe((c) => c.readyState = 4); }

  createConnection(req: Request) {
    if (!req || !(req instanceof Request)) {
      throw new Error(`createConnection requires an instance of Request, got ${req}`);
    }
    let connection = new MockConnection(req);
    this.connections.onNext(connection);
    return connection;
  }
}
