import {List, Map, ListWrapper, MapWrapper} from 'facade/collection';
import {Element, DOM} from 'facade/dom';
import {int, isBlank, isPresent} from 'facade/lang';
import {AnnotatedType} from '../annotated_type';
import {Decorator} from '../../annotations/decorator';
import {Component} from '../../annotations/component';
import {Template} from '../../annotations/template';

/**
 * Collects all data that is needed to process an element
 * in the compile process. Fields are filled
 * by the CompileSteps starting out with the pure HTMLElement.
 */
export class CompileElement {
  constructor(element:Element) {
    this.element = element;
    this._attrs = null;
    this._classList = null;
    this.textNodeBindings = null;
    this.propertyBindings = null;
    this.decoratorDirectives = null;
    this.templateDirective = null;
    this.componentDirective = null;
    this.isViewRoot = false;
    this.hasBindings = false;
    // inherited down to children if they don't have
    // an own protoView
    this.inheritedProtoView = null;
    // inherited down to children if they don't have
    // an own protoElementInjector
    this.inheritedProtoElementInjector = null;
    // inherited down to children if they don't have
    // an own elementBinder
    this.inheritedElementBinder = null;
  }

  refreshAttrs() {
    this._attrs = null;
  }

  attrs():Map<string,string> {
    if (isBlank(this._attrs)) {
      this._attrs = DOM.attributeMap(this.element);
    }
    return this._attrs;
  }

  refreshClassList() {
    this._classList = null;
  }

  classList():List<string> {
    if (isBlank(this._classList)) {
      this._classList = ListWrapper.create();
      var elClassList = DOM.classList(this.element);
      for (var i = 0; i < elClassList.length; i++) {
        ListWrapper.push(this._classList, elClassList[i]);
      }
    }
    return this._classList;
  }

  addTextNodeBinding(indexInParent:int, expression:string) {
    if (isBlank(this.textNodeBindings)) {
      this.textNodeBindings = MapWrapper.create();
    }
    MapWrapper.set(this.textNodeBindings, indexInParent, expression);
  }

  addPropertyBinding(property:string, expression:string) {
    if (isBlank(this.propertyBindings)) {
      this.propertyBindings = MapWrapper.create();
    }
    MapWrapper.set(this.propertyBindings, property, expression);
  }

  addDirective(directive:AnnotatedType) {
    var annotation = directive.annotation;
    if (annotation instanceof Decorator) {
      if (isBlank(this.decoratorDirectives)) {
        this.decoratorDirectives = ListWrapper.create();
      }
      ListWrapper.push(this.decoratorDirectives, directive);
    } else if (annotation instanceof Template) {
      this.templateDirective = directive;
    } else if (annotation instanceof Component) {
      this.componentDirective = directive;
    }
  }
}
