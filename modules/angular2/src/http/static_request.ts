import {RequestMethods, RequestModesOpts, RequestCredentialsOpts} from './enums';
import {URLSearchParams} from './url_search_params';
import {RequestOptions, Request as IRequest} from './interfaces';
import {Headers} from './headers';
import {BaseException, RegExpWrapper} from 'angular2/src/facade/lang';

// TODO(jeffbcross): properly implement body accessors
/**
 * Request constructor.
 * 
 * The Request's interface is inspired by the Request constructor defined in the [Fetch Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other differences in the implementation, but this is the most significant.
 * 
 * This class is generated automatically and opaquely when calling the {@link Http} service, but soon can also be used to intantiate requests directly to pass into the {@link Http} service, pending resolution of [this issue](https://github.com/angular/angular/issues/2416).
 * 
 * #Example
 * 
 * ```
 * var req = new Request('form-submit.php', {method: 'POST'});
 * http(req).subscribe(res => console.log(res));
 * ``` 
 * 
 * @exportedAs angular2/http
 */
export class Request implements IRequest {
  method: RequestMethods;
  mode: RequestModesOpts;
  credentials: RequestCredentialsOpts;
  headers: Headers;
  /*
   * Non-Standard Properties
   */
  // This property deviates from the standard. Body can be set in constructor, but is only
  // accessible
  // via json(), text(), arrayBuffer(), and blob() accessors, which also change the request's state
  // to "used".
  private body: URLSearchParams | FormData | Blob | string;

  constructor(public url: string, {body, method = RequestMethods.GET, mode = RequestModesOpts.Cors,
                                   credentials = RequestCredentialsOpts.Omit,
                                   headers = new Headers()}: RequestOptions = {}) {
    this.body = body;
    // Defaults to 'GET', consistent with browser
    this.method = method;
    // Defaults to 'cors', consistent with browser
    // TODO(jeffbcross): implement behavior
    this.mode = mode;
    // Defaults to 'omit', consistent with browser
    // TODO(jeffbcross): implement behavior
    this.credentials = credentials;
    // Defaults to empty headers object, consistent with browser
    this.headers = headers;
  }

  text(): String { return this.body ? this.body.toString() : ''; }
}
