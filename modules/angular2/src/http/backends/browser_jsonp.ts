import {Injectable} from 'angular2/di';

// Make sure not to evaluate this in a non-browser environment!
@Injectable()
export class BrowserJsonp {
  constructor() {}

  // Construct a <script> element with the specified URL
  build(url: string): any {
    let node = document.createElement('script');
    node.src = url;
    return node;
  }

  // Attach the <script> element to the DOM
  send(node: any) { document.body.appendChild(<Node>(node)); }

  // Remove <script> element from the DOM
  cleanup(node: any) {
    if (node.parentNode) {
      node.parentNode.removeChild(<Node>(node));
    }
  }
}
