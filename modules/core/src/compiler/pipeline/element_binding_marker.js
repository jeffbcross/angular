import {isPresent} from 'facade/lang';
import {MapWrapper} from 'facade/collection';
import {DOM} from 'facade/dom';

import {CompileStep} from './compile_step';
import {CompileElement} from './compile_element';
import {CompileControl} from './compile_control';

const NG_BINDING_CLASS = 'ng-binding';

/**
 * Marks elements that have bindings with a css class
 * and sets the CompileElement.hasBindings flag.
 *
 * Fills:
 * - CompileElement#hasBindings
 *
 * Reads:
 * - CompileElement#textNodeBindings
 * - CompileElement#propertyBindings
 * - CompileElement#decoratorDirectives
 * - CompileElement#componentDirective
 * - CompileElement#templateDirective
 */
export class ElementBindingMarker extends CompileStep {
  process(parent:CompileElement, current:CompileElement, control:CompileControl) {
    var hasBindings =
      (isPresent(current.textNodeBindings) && MapWrapper.size(current.textNodeBindings)>0) ||
      (isPresent(current.propertyBindings) && MapWrapper.size(current.propertyBindings)>0) ||
      (isPresent(current.decoratorDirectives) && current.decoratorDirectives.length > 0) ||
      isPresent(current.templateDirective) ||
      isPresent(current.componentDirective);

    if (hasBindings) {
      var element = current.element;
      DOM.addClass(element, NG_BINDING_CLASS);
      current.hasBindings = true;
    }
  }
}
