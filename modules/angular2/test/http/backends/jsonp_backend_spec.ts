import {
  AsyncTestCompleter,
  afterEach,
  beforeEach,
  ddescribe,
  describe,
  expect,
  iit,
  inject,
  it,
  xit,
  SpyObject
} from 'angular2/test_lib';
import {ObservableWrapper} from 'angular2/src/facade/async';
import {BrowserJsonp} from 'angular2/src/http/backends/browser_jsonp';
import {JSONPConnection, JSONPBackend} from 'angular2/src/http/backends/jsonp_backend';
import {bind, Injector} from 'angular2/di';
import {isPresent, StringWrapper} from 'angular2/src/facade/lang';
import {TimerWrapper} from 'angular2/src/facade/async';
import {Request} from 'angular2/src/http/static_request';
import {Map} from 'angular2/src/facade/collection';
import {RequestOptions, BaseRequestOptions} from 'angular2/src/http/base_request_options';
import {BaseResponseOptions, ResponseOptions} from 'angular2/src/http/base_response_options';
import {ResponseTypes, ReadyStates, RequestMethods} from 'angular2/src/http/enums';
import {DomAdapter} from 'angular2/src/dom/dom_adapter';

var addEventListenerSpy;
var existingScripts = [];

class MockElement {
  addEventListener(){}
}

class MockDomAdapter {
  body:any = {};
  createScriptTag (attr:string, val:string) {
    
  }
}

class MockBrowserJsonp extends BrowserJsonp {
  src: string;
  callbacks: Map<string, (data: any) => any>;
  mockDomAdapter:MockDomAdapter
  constructor(mockDomAdapter:MockDomAdapter) {
    super(<DomAdapter>mockDomAdapter);
    this.callbacks = new Map();
    this.mockDomAdapter = mockDomAdapter;
  }

  addEventListener(type: string, cb: (data: any) => any) { this.callbacks.set(type, cb); }

  dispatchEvent(type: string, argument?: any) {
    if (!isPresent(argument)) {
      argument = {};
    }
    this.callbacks.get(type)(argument);
  }

  build(url: string) {
    var script = new MockBrowserJsonp(this.mockDomAdapter);
    script.src = url;
    existingScripts.push(script);
    return script;
  }

  send(node: any) { /* noop */
  }
  cleanup(node: any) { /* noop */
  }
}

export function main() {
  describe('JSONPBackend', () => {
    let backend;
    let sampleRequest;

    beforeEach(() => {
      let injector = Injector.resolveAndCreate([
        MockDomAdapter,
        bind(DomAdapter).toClass(MockDomAdapter),
        bind(ResponseOptions)
            .toClass(BaseResponseOptions),
        bind(BrowserJsonp).toFactory((domAdapter) => {
          return new MockBrowserJsonp(domAdapter);
        }, [MockDomAdapter]),
        [JSONPBackend]
      ]);
      backend = injector.get(JSONPBackend);
      let base = new BaseRequestOptions();
      sampleRequest = new Request(base.merge(new RequestOptions({url: 'https://google.com'})));
    });

    afterEach(() => { existingScripts = []; });

    it('should create a connection',
       () => { expect(() => backend.createConnection(sampleRequest)).not.toThrow(); });


    describe('JSONPConnection', () => {
      it('should use the injected BaseResponseOptions to create the response',
         inject([AsyncTestCompleter], async => {
           let connection = new JSONPConnection(sampleRequest, new MockBrowserJsonp(new MockDomAdapter()),
                                                new ResponseOptions({type: ResponseTypes.Error}));
           ObservableWrapper.subscribe(connection.response, res => {
             expect(res.type).toBe(ResponseTypes.Error);
             async.done();
           });
           connection.finished();
           existingScripts[0].dispatchEvent('load');
         }));

      it('should ignore load/callback when disposed', inject([AsyncTestCompleter], async => {
           var connection = new JSONPConnection(sampleRequest, new MockBrowserJsonp(new MockDomAdapter()));
           connection.dispose();
           expect(connection.readyState).toBe(ReadyStates.CANCELLED);

           ObservableWrapper.subscribe(connection.response, res => {
             expect("UNREACHABLE CODE").not.toBe("REACHED");
             async.done();
           });
           connection.finished('Fake data');
           existingScripts[0].dispatchEvent('load');

           TimerWrapper.setTimeout(() => async.done(), 10);
         }));

      it('should report error if loaded without invoking callback',
         inject([AsyncTestCompleter], async => {
           let connection = new JSONPConnection(sampleRequest, new MockBrowserJsonp(new MockDomAdapter()));

           ObservableWrapper.subscribe(
               connection.response,
               res => {
                 expect("UNREACHABLE CODE").not.toBe("REACHED");
                 async.done();
               },
               err => {
                 expect(StringWrapper.contains(err.message, 'did not invoke callback')).toBe(true);
                 async.done();
               });

           existingScripts[0].dispatchEvent('load');
         }));

      it('should report error if script contains error', inject([AsyncTestCompleter], async => {
           let connection = new JSONPConnection(sampleRequest, new MockBrowserJsonp(new MockDomAdapter()));

           ObservableWrapper.subscribe(connection.response,
                                       res => {
                                         expect("UNREACHABLE CODE").not.toBe("REACHED");
                                         async.done();
                                       },
                                       err => {
                                         expect(err['message']).toBe('Oops!');
                                         async.done();
                                       });

           existingScripts[0].dispatchEvent('error', ({message: "Oops!"}));
         }));

      it('should throw if request method is not GET', () => {
        [RequestMethods.POST, RequestMethods.PUT, RequestMethods.DELETE, RequestMethods.OPTIONS,
         RequestMethods.HEAD, RequestMethods.PATCH]
            .forEach(method => {
              let base = new BaseRequestOptions();
              let req = new Request(
                  base.merge(new RequestOptions({url: 'https://google.com', method: method})));
              expect(() => new JSONPConnection(req, new MockBrowserJsonp(new MockDomAdapter()))).toThrow();
            });
      });

      it('should respond with data passed to callback', inject([AsyncTestCompleter], async => {
           let connection = new JSONPConnection(sampleRequest, new MockBrowserJsonp(new MockDomAdapter()));

           ObservableWrapper.subscribe(connection.response, res => {
             expect(res.json()).toEqual(({fake_payload: true, blob_id: 12345})); 
             async.done();
           });

           connection.finished(({fake_payload: true, blob_id: 12345}));
           existingScripts[0].dispatchEvent('load');
         }));
    });
  });
}
