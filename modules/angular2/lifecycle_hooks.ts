/**
 * @module
 * @description
 * Defines interfaces to be implemented by directives when they need to hook into the change
 * detection mechanism.
 */

export {
  afterContentInit,
  AfterContentInit,
  afterContentChecked,
  AfterContentChecked,
  afterViewInit,
  AfterViewInit,
  afterViewChecked,
  AfterViewChecked,
  onChanges,
  OnChanges,
  onDestroy,
  OnDestroy,
  onInit,
  OnInit,
  doCheck,
  DoCheck
} from './src/core/linker/interfaces';
