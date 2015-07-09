import {Injectable} from 'angular2/di';
import {DomAdapter} from 'angular2/src/dom/dom_adapter';

// Make sure not to evaluate this in a non-browser environment!
@Injectable()
export class BrowserJsonp {
  constructor(private _domAdapter:DomAdapter) {}

  // Construct a <script> element with the specified URL
  build(url: string): any {
    return this._domAdapter.createScriptTag('src', url);
  }

  // Attach the <script> element to the DOM
  send(node: any) { this._domAdapter.appendChild(this._domAdapter.body, <Node>(node)); }

  // Remove <script> element from the DOM
  cleanup(node: any) {
    if (node.parentNode) {
      node.parentNode.removeChild(<Node>(node));
    }
  }
}
