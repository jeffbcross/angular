library angular2.src.core.linker.interfaces;

enum LifecycleHooks {
  OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
}

const onInit = 'onInit';
const onDestroy = 'onDestroy';
const doCheck = 'doCheck';
const onChanges = 'onChanges';
const afterContentInit = 'afterContentInit';
const afterContentChecked = 'afterContentChecked';
const afterViewInit = 'afterViewInit';
const afterViewChecked = 'afterViewChecked';

var LIFECYCLE_HOOKS_VALUES = [
  LifecycleHooks.OnInit,
  LifecycleHooks.OnDestroy,
  LifecycleHooks.DoCheck,
  LifecycleHooks.OnChanges,
  LifecycleHooks.AfterContentInit,
  LifecycleHooks.AfterContentChecked,
  LifecycleHooks.AfterViewInit,
  LifecycleHooks.AfterViewChecked
];

abstract class OnChanges {
  onChanges(Map<String, SimpleChange> changes);
}

abstract class OnInit {
  onInit();
}

abstract class DoCheck {
  doCheck();
}

abstract class OnDestroy {
  onDestroy();
}

abstract class AfterContentInit {
  afterContentInit();
}

abstract class AfterContentChecked {
  afterContentChecked();
}

abstract class AfterViewInit {
  afterViewInit();
}

abstract class AfterViewChecked {
  afterViewChecked();
}
