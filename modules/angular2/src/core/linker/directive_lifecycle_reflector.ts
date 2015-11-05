import {Type} from 'angular2/src/facade/lang';
import {
  LifecycleHooks,
  onInit,
  onDestroy,
  doCheck,
  onChanges,
  afterContentInit,
  afterContentChecked,
  afterViewInit,
  afterViewChecked
} from './interfaces';

export function hasLifecycleHook(lcInterface: LifecycleHooks | string, token): boolean {
  if (!(token instanceof Type)) return false;

  var proto = (<any>token).prototype;

  switch (lcInterface) {
    case LifecycleHooks.AfterContentInit:
      return !!proto[afterContentInit];
    case LifecycleHooks.AfterContentChecked:
      return !!proto[afterContentChecked];
    case LifecycleHooks.AfterViewInit:
      return !!proto[afterViewInit];
    case LifecycleHooks.AfterViewChecked:
      return !!proto[afterViewChecked];
    case LifecycleHooks.OnChanges:
      return !!proto[onChanges];
    case LifecycleHooks.DoCheck:
      return !!proto[doCheck];
    case LifecycleHooks.OnDestroy:
      return !!proto[onDestroy];
    case LifecycleHooks.OnInit:
      return !!proto[onInit];
    default:
      return false;
  }
}
