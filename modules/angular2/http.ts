/**
 * @module
 * @public
 * @description
 * The `http` module provides services to perform http requests.
 */
import {bind, Binding} from 'angular2/di';
import {Http, HttpFactory} from './src/http/http';
import {XHRBackend, XHRConnection} from 'angular2/src/http/backends/xhr_backend';
import {BrowserXHR} from 'angular2/src/http/backends/browser_xhr';

export {MockConnection, MockBackend} from 'angular2/src/http/backends/mock_backend';
export {Request} from 'angular2/src/http/static_request';
export {Response} from 'angular2/src/http/static_response';

export {Http, XHRBackend, XHRConnection};

/**
 * Provides basic set of injectables to use {@link Http} service in any application
 * 
 * #Example
 * 
 * ```
 * import {httpInjectables} from 'angular2/http';
 * @Component({selector: 'http-app', appInjector: [httpInjectables]})
 * @View({template: '{{data}}'})
 * class MyApp {
 *   constructor(@Inject(Http) http) {
 *     http('data.txt').subscribe(res => this.data = res.text());
 *   }
 * } 
 * ```
 * 
 * @exportedAs angular2/http
 * 
 */
export var httpInjectables: List<any> = [
  XHRBackend,
  bind(BrowserXHR).toValue(BrowserXHR),
  bind(Http).toFactory(HttpFactory, [XHRBackend])
];
