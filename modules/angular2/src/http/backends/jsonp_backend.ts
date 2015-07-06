import {ConnectionBackend, Connection} from '../interfaces';
import {ReadyStates, RequestMethods, RequestMethodsMap} from '../enums';
import {Request} from '../static_request';
import {Response} from '../static_response';
import {ResponseOptions, BaseResponseOptions} from '../base_response_options';
import {Injectable} from 'angular2/di';
import {BrowserJsonp} from './browser_jsonp';
import {EventEmitter, ObservableWrapper} from 'angular2/src/facade/async';
import {isPresent, ENUM_INDEX, global, makeTypeError} from 'angular2/src/facade/lang';

export const JSONP_HOME = '__ng_jsonp__';

function getJsonpConnections() {
  let jsonpConnections = global[JSONP_HOME];
  if (!isPresent(jsonpConnections)) {
    jsonpConnections = global[JSONP_HOME] = {};
  }
  return jsonpConnections;
}

let JSONP_REQUEST_INDEX = 0;
function nextCallbackId() {
  return `__req${JSONP_REQUEST_INDEX++}`;
}

export class JSONPConnection implements Connection {
  readyState: ReadyStates;
  request: Request;
  response: EventEmitter;
  private _id: string;
  private _script: Element;
  private _responseData: any;

  constructor(req: Request, private _dom: BrowserJsonp,
              private baseResponseOptions?: ResponseOptions) {
    if (req.method !== RequestMethods.GET) {
      throw makeTypeError("JSONP requests must use GET request method.");
    }
    this.request = req;
    this.response = new EventEmitter();
    this.readyState = ReadyStates.LOADING;
    let jsonpConnections = getJsonpConnections();
    let id = this._id = nextCallbackId();
    jsonpConnections[id] = this;

    // Workaround Dart stupidity
    let url = req.url;
    if (url.indexOf('=JSONP_CALLBACK&') > -1) {
      url = url.replace('=JSONP_CALLBACK&', `=${JSONP_HOME}.${id}.finished&`);
    } else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
      url = url.slice(0, url.length - '=JSONP_CALLBACK'.length) + `=${JSONP_HOME}.${id}.finished`;
    }

    let script = this._script = _dom.build(url);

    script.addEventListener('load', (event) => {
      if (this.readyState === ReadyStates.CANCELLED) return;
      this.readyState = ReadyStates.DONE;
      _dom.cleanup(script);
      if (jsonpConnections[this._id] !== null) {
        ObservableWrapper.callThrow(
            this.response, makeTypeError('JSONP injected script did not invoke callback.'));
        return;
      }

      let responseOptions = new ResponseOptions({body: this._responseData});
      if (isPresent(this.baseResponseOptions)) {
        responseOptions = this.baseResponseOptions.merge(responseOptions);
      }

      ObservableWrapper.callNext(this.response, new Response(responseOptions))
    });

    script.addEventListener('error', (error) => {
      this.readyState = ReadyStates.DONE;
      _dom.cleanup(script);
      ObservableWrapper.callThrow(this.response, error);
    });

    _dom.send(script);
  }

  finished(data?: any) {
    // Don't leak connections
    let jsonpConnections = getJsonpConnections();
    jsonpConnections[this._id] = null;
    if (this.readyState === ReadyStates.CANCELLED) return;
    this._responseData = data;
  }

  dispose(): void {
    this.readyState = ReadyStates.CANCELLED;
    let script = this._script;
    this._script = null;
    if (isPresent(script)) {
      this._dom.cleanup(script);
    }
  }
}

@Injectable()
export class JSONPBackend implements ConnectionBackend {
  constructor(private _browserJSONP: BrowserJsonp, private _baseResponseOptions: ResponseOptions) {}
  createConnection(request: Request): JSONPConnection {
    return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
  }
}
