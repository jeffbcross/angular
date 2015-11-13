import {
  AsyncTestCompleter,
  beforeEach,
  ddescribe,
  describe,
  expect,
  iit,
  inject,
  it,
  xdescribe,
  xit
} from 'angular2/testing_internal';

import {getSymbolsFromLibrary} from './symbol_inspector/symbol_inspector';
import {SymbolsDiff} from './symbol_inspector/symbol_differ';

// =================================================================================================
// =================================================================================================
// =========== S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P  ===========
// =================================================================================================
// =================================================================================================
//
// DO NOT EDIT THIS LIST OF PUBLIC APIS UNLESS YOU GET IT CLEARED BY: mhevery, vsavkin, or tbosch!
//
// =================================================================================================
// =================================================================================================

var NG_ALL = [
  'afterContentChecked',
  'afterContentInit',
  'afterViewChecked',
  'afterViewInit',
  'doCheck',
  'onChanges',
  'onDestroy',
  'onInit',
  'APP_COMPONENT',
  'APP_ID',
  'AbstractProviderError',
  'AbstractProviderError.addKey()',
  'AbstractProviderError.constructResolvingMessage',
  'AbstractProviderError.constructResolvingMessage=',
  'AbstractProviderError.context',
  'AbstractProviderError.injectors',
  'AbstractProviderError.injectors=',
  'AbstractProviderError.keys',
  'AbstractProviderError.keys=',
  'AbstractProviderError.message',
  'AbstractProviderError.message=',
  'AbstractProviderError.stackTrace',
  'AbstractControl',
  'AbstractControl.dirty',
  'AbstractControl.errors',
  'AbstractControl.find()',
  'AbstractControl.getError()',
  'AbstractControl.hasError()',
  'AbstractControl.setErrors()',
  'AbstractControl.markAsDirty()',
  'AbstractControl.markAsPending()',
  'AbstractControl.markAsTouched()',
  'AbstractControl.pending',
  'AbstractControl.pristine',
  'AbstractControl.setParent()',
  'AbstractControl.status',
  'AbstractControl.touched',
  'AbstractControl.untouched',
  'AbstractControl.updateValueAndValidity()',
  'AbstractControl.valid',
  'AbstractControl.validator',
  'AbstractControl.validator=',
  'AbstractControl.asyncValidator',
  'AbstractControl.asyncValidator=',
  'AbstractControl.value',
  'AbstractControl.valueChanges',
  'AbstractControl.statusChanges',
  'AbstractControlDirective',
  'AbstractControlDirective.control',
  'AbstractControlDirective.dirty',
  'AbstractControlDirective.errors',
  'AbstractControlDirective.pristine',
  'AbstractControlDirective.touched',
  'AbstractControlDirective.untouched',
  'AbstractControlDirective.valid',
  'AbstractControlDirective.value',
  'AbstractControlDirective.path',
  'AppRootUrl',
  'AppRootUrl.value',
  'AppRootUrl.value=',
  'AppViewManager:js',
  'AppViewManager.getHostElement():js',
  /*
  Abstract methods
  'AppViewManager.attachViewInContainer()',
  'AppViewManager.createEmbeddedViewInContainer()',
  'AppViewManager.createHostViewInContainer()',
  'AppViewManager.createRootHostView()',
  'AppViewManager.destroyRootHostView()',
  'AppViewManager.destroyViewInContainer()',
  'AppViewManager.detachViewInContainer()',
  'AppViewManager.getComponent()',
  'AppViewManager.getNamedElementInComponentView()',
  'AppViewManager.getViewContainer()',
  */
  'ApplicationRef:js',
  'ApplicationRef.injector:js',
  'ApplicationRef.zone:js',
  'ApplicationRef.componentTypes:js',
  /*
  Abstract methods
  'ApplicationRef.bootstrap()',
  'ApplicationRef.dispose()',
  'ApplicationRef.registerBootstrapListener()',
  'ApplicationRef.registerDisposeListener()',
  'ApplicationRef.tick()',
  */
  'AsyncPipe',
  'AsyncPipe.onDestroy()',
  'AsyncPipe.transform()',
  'Attribute',
  'Attribute.attributeName',
  'Attribute.token',
  'AttributeMetadata',
  'AttributeMetadata.attributeName',
  'AttributeMetadata.token',
  'Binding',
  'Binding.dependencies',
  'Binding.multi',
  'Binding.useExisting',
  'Binding.useClass',
  'Binding.useFactory',
  'Binding.useValue',
  'Binding.token',
  'Binding.toAlias',
  'Binding.toClass',
  'Binding.toFactory',
  'Binding.toValue',
  'Provider',
  'Provider.dependencies',
  'Provider.multi',
  'Provider.useExisting',
  'Provider.useClass',
  'Provider.useFactory',
  'Provider.useValue',
  'Provider.token',
  'ProviderBuilder',
  'ProviderBuilder.toAlias()',
  'ProviderBuilder.toClass()',
  'ProviderBuilder.toFactory()',
  'ProviderBuilder.toValue()',
  'ProviderBuilder.token',
  'ProviderBuilder.token=',
  'By#all()',
  'By#css()',
  'By#directive()',
  'By',
  'CORE_DIRECTIVES',
  'COMMON_DIRECTIVES',
  'PLATFORM_DIRECTIVES:js',
  'ChangeDetectionError',
  'ChangeDetectionError.context',
  'ChangeDetectionError.location',
  'ChangeDetectionError.location=',
  'ChangeDetectionError.message',
  'ChangeDetectionError.stackTrace',
  'ChangeDetectionError.wrapperMessage',
  'ChangeDetectionStrategy#CheckAlways',
  'ChangeDetectionStrategy#CheckOnce',
  'ChangeDetectionStrategy#Checked',
  'ChangeDetectionStrategy#Default',
  'ChangeDetectionStrategy#Detached',
  'ChangeDetectionStrategy#OnPush',
  'ChangeDetectionStrategy#OnPushObserve',
  'ChangeDetectionStrategy#values',
  'ChangeDetectionStrategy',
  'ChangeDetectionStrategy.index',
  'ChangeDetectorRef',
  /*
   Abstract methods
  'ChangeDetectorRef.detach()',
  'ChangeDetectorRef.detectChanges()',
  'ChangeDetectorRef.markForCheck()',
  'ChangeDetectorRef.reattach()',*/
  'CheckboxControlValueAccessor',
  'CheckboxControlValueAccessor.onChange',
  'CheckboxControlValueAccessor.onChange=',
  'CheckboxControlValueAccessor.onTouched',
  'CheckboxControlValueAccessor.onTouched=',
  'CheckboxControlValueAccessor.registerOnChange()',
  'CheckboxControlValueAccessor.registerOnTouched()',
  'CheckboxControlValueAccessor.writeValue()',
  'Class:js',
  'Compiler:js',
  /*
   Abstract methods
  'Compiler.compileInHost()',
  'Compiler.clearCache()',
  */
  'Component',
  'Component.bindings',
  'Component.providers',
  'Component.changeDetection',
  'Component.outputs',
  'Component.events',
  'Component.exportAs',
  'Component.host',
  'Component.moduleId',
  'Component.inputs',
  'Component.properties',
  'Component.queries',
  'Component.selector',
  'Component.viewBindings',
  'Component.viewProviders',
  'Component.directives',
  'Component.encapsulation',
  'Component.pipes',
  'Component.styleUrls',
  'Component.styles',
  'Component.template',
  'Component.templateUrl',
  'ComponentMetadata',
  'ComponentMetadata.bindings',
  'ComponentMetadata.providers',
  'ComponentMetadata.changeDetection',
  'ComponentMetadata.outputs',
  'ComponentMetadata.events',
  'ComponentMetadata.exportAs',
  'ComponentMetadata.host',
  'ComponentMetadata.moduleId',
  'ComponentMetadata.inputs',
  'ComponentMetadata.properties',
  'ComponentMetadata.queries',
  'ComponentMetadata.selector',
  'ComponentMetadata.viewBindings',
  'ComponentMetadata.viewProviders',
  'ComponentMetadata.directives',
  'ComponentMetadata.encapsulation',
  'ComponentMetadata.pipes',
  'ComponentMetadata.styleUrls',
  'ComponentMetadata.styles',
  'ComponentMetadata.template',
  'ComponentMetadata.templateUrl',
  'ComponentRef',
  'ComponentRef.componentType',
  'ComponentRef.componentType=',
  'ComponentRef.hostComponent:js',
  'ComponentRef.hostView:js',
  'ComponentRef.injector',
  'ComponentRef.injector=',
  'ComponentRef.instance',
  'ComponentRef.instance=',
  'ComponentRef.location',
  'ComponentRef.location=',
  /*
   Abstract method
  'ComponentRef.dispose()',
  'ComponentRef.hostComponentType',
   */

  'ContentChild',
  'ContentChild.descendants',
  'ContentChild.first',
  'ContentChild.isVarBindingQuery',
  'ContentChild.isViewQuery',
  'ContentChild.selector',
  'ContentChild.token',
  'ContentChild.varBindings',
  'ContentChildMetadata',
  'ContentChildMetadata.descendants',
  'ContentChildMetadata.first',
  'ContentChildMetadata.isVarBindingQuery',
  'ContentChildMetadata.isViewQuery',
  'ContentChildMetadata.selector',
  'ContentChildMetadata.token',
  'ContentChildMetadata.varBindings',
  'ContentChildren',
  'ContentChildren.descendants',
  'ContentChildren.first',
  'ContentChildren.isVarBindingQuery',
  'ContentChildren.isViewQuery',
  'ContentChildren.selector',
  'ContentChildren.token',
  'ContentChildren.varBindings',
  'ContentChildrenMetadata',
  'ContentChildrenMetadata.descendants',
  'ContentChildrenMetadata.first',
  'ContentChildrenMetadata.isVarBindingQuery',
  'ContentChildrenMetadata.isViewQuery',
  'ContentChildrenMetadata.selector',
  'ContentChildrenMetadata.token',
  'ContentChildrenMetadata.varBindings',
  'Control',
  'Control.dirty',
  'Control.errors',
  'Control.find()',
  'Control.getError()',
  'Control.hasError()',
  'Control.markAsDirty()',
  'Control.markAsPending()',
  'Control.markAsTouched()',
  'Control.pending',
  'Control.pristine',
  'Control.registerOnChange()',
  'Control.setParent()',
  'Control.status',
  'Control.touched',
  'Control.untouched',
  'Control.updateValue()',
  'Control.updateValueAndValidity()',
  'Control.valid',
  'Control.validator',
  'Control.validator=',
  'Control.asyncValidator',
  'Control.asyncValidator=',
  'Control.value',
  'Control.valueChanges',
  'Control.statusChanges',
  'Control.setErrors()',
  'ControlArray',
  'ControlArray.at()',
  'ControlArray.controls',
  'ControlArray.controls=',
  'ControlArray.dirty',
  'ControlArray.errors',
  'ControlArray.find()',
  'ControlArray.getError()',
  'ControlArray.hasError()',
  'ControlArray.insert()',
  'ControlArray.length',
  'ControlArray.markAsDirty()',
  'ControlArray.markAsPending()',
  'ControlArray.markAsTouched()',
  'ControlArray.pending',
  'ControlArray.pristine',
  'ControlArray.push()',
  'ControlArray.removeAt()',
  'ControlArray.setParent()',
  'ControlArray.status',
  'ControlArray.touched',
  'ControlArray.untouched',
  'ControlArray.updateValueAndValidity()',
  'ControlArray.valid',
  'ControlArray.validator',
  'ControlArray.validator=',
  'ControlArray.asyncValidator',
  'ControlArray.asyncValidator=',
  'ControlArray.value',
  'ControlArray.valueChanges',
  'ControlArray.statusChanges',
  'ControlArray.setErrors()',
  'ControlContainer',
  'ControlContainer.control',
  'ControlContainer.dirty',
  'ControlContainer.errors',
  'ControlContainer.formDirective',
  'ControlContainer.name',
  'ControlContainer.name=',
  'ControlContainer.path',
  'ControlContainer.pristine',
  'ControlContainer.touched',
  'ControlContainer.untouched',
  'ControlContainer.valid',
  'ControlContainer.value',
  'ControlGroup',
  'ControlGroup.addControl()',
  'ControlGroup.contains()',
  'ControlGroup.controls',
  'ControlGroup.controls=',
  'ControlGroup.dirty',
  'ControlGroup.errors',
  'ControlGroup.exclude()',
  'ControlGroup.find()',
  'ControlGroup.getError()',
  'ControlGroup.hasError()',
  'ControlGroup.include()',
  'ControlGroup.markAsDirty()',
  'ControlGroup.markAsPending()',
  'ControlGroup.markAsTouched()',
  'ControlGroup.pending',
  'ControlGroup.pristine',
  'ControlGroup.removeControl()',
  'ControlGroup.setParent()',
  'ControlGroup.status',
  'ControlGroup.touched',
  'ControlGroup.untouched',
  'ControlGroup.updateValueAndValidity()',
  'ControlGroup.valid',
  'ControlGroup.validator',
  'ControlGroup.validator=',
  'ControlGroup.asyncValidator',
  'ControlGroup.asyncValidator=',
  'ControlGroup.value',
  'ControlGroup.valueChanges',
  'ControlGroup.statusChanges',
  'ControlGroup.setErrors()',
  'CurrencyPipe',
  'CurrencyPipe.transform()',
  'CyclicDependencyError',
  'CyclicDependencyError.addKey()',
  'CyclicDependencyError.constructResolvingMessage',
  'CyclicDependencyError.constructResolvingMessage=',
  'CyclicDependencyError.context',
  'CyclicDependencyError.injectors',
  'CyclicDependencyError.injectors=',
  'CyclicDependencyError.keys',
  'CyclicDependencyError.keys=',
  'CyclicDependencyError.message',
  'CyclicDependencyError.message=',
  'CyclicDependencyError.stackTrace',
  'COMMON_PIPES',
  'PLATFORM_PIPES:js',
  'DOCUMENT',
  'DatePipe',
  'DatePipe.supports()',
  'DatePipe.transform()',
  'DebugElement',
  'DebugElement.children',
  'DebugElement.componentInstance',
  'DebugElement.componentViewChildren',
  'DebugElement.elementRef',
  /*
   Abstract methods
  'DebugElement.getDirectiveInstance()',
  'DebugElement.getLocal()',
  'DebugElement.hasDirective()',
  'DebugElement.inject()',
  */
  'DebugElement.nativeElement',
  'DebugElement.query()',
  'DebugElement.queryAll()',
  'DecimalPipe',
  'DecimalPipe.transform()',
  'RequiredValidator',
  'MinLengthValidator',
  'MinLengthValidator.validate()',
  'MaxLengthValidator',
  'MaxLengthValidator.validate()',
  'Validator:dart',
  'DefaultValueAccessor',
  'DefaultValueAccessor.onChange',
  'DefaultValueAccessor.onChange=',
  'DefaultValueAccessor.onTouched',
  'DefaultValueAccessor.onTouched=',
  'DefaultValueAccessor.registerOnChange()',
  'DefaultValueAccessor.registerOnTouched()',
  'DefaultValueAccessor.writeValue()',
  'Dependency#fromKey()',
  'Dependency',
  'Dependency.key',
  'Dependency.key=',
  'Dependency.lowerBoundVisibility',
  'Dependency.lowerBoundVisibility=',
  'Dependency.optional',
  'Dependency.optional=',
  'Dependency.properties',
  'Dependency.properties=',
  'Dependency.upperBoundVisibility',
  'Dependency.upperBoundVisibility=',
  'DependencyMetadata',
  'DependencyMetadata.token',
  'Directive',
  'Directive.bindings',
  'Directive.providers',
  'Directive.outputs',
  'Directive.events',
  'Directive.exportAs',
  'Directive.host',
  'Directive.moduleId',
  'Directive.inputs',
  'Directive.properties',
  'Directive.queries',
  'Directive.selector',
  'DirectiveMetadata',
  'DirectiveMetadata.bindings',
  'DirectiveMetadata.providers',
  'DirectiveMetadata.outputs',
  'DirectiveMetadata.events',
  'DirectiveMetadata.exportAs',
  'DirectiveMetadata.host',
  'DirectiveMetadata.moduleId',
  'DirectiveMetadata.inputs',
  'DirectiveMetadata.properties',
  'DirectiveMetadata.queries',
  'DirectiveMetadata.selector',
  'DirectiveResolver',
  'DirectiveResolver.resolve()',
  'DynamicComponentLoader',
  /*
   Abstract methods
  'DynamicComponentLoader.loadAsRoot()',
  'DynamicComponentLoader.loadIntoLocation()',
  'DynamicComponentLoader.loadNextToLocation()',
  */
  'ELEMENT_PROBE_PROVIDERS',
  'ELEMENT_PROBE_BINDINGS',
  'ElementRef',
  'ElementRef.boundElementIndex',
  'ElementRef.boundElementIndex=',
  'ElementRef.nativeElement',
  'ElementRef.parentView',
  'ElementRef.parentView=',
  'ElementRef.renderView',
  'ErrorHandlingFn:dart',
  'Output',
  'Output.bindingPropertyName',

  'EventEmitter',

  /*
   Dart Stream/EventEmitter
  */
  'EventEmitter.add():dart',
  'EventEmitter.addError():dart',
  'EventEmitter.any():dart',
  'EventEmitter.asBroadcastStream():dart',
  'EventEmitter.asyncExpand():dart',
  'EventEmitter.asyncMap():dart',
  'EventEmitter.close():dart',
  'EventEmitter.contains():dart',
  'EventEmitter.distinct():dart',
  'EventEmitter.drain():dart',
  'EventEmitter.elementAt():dart',
  'EventEmitter.every():dart',
  'EventEmitter.expand():dart',
  'EventEmitter.first:dart',
  'EventEmitter.firstWhere():dart',
  'EventEmitter.fold():dart',
  'EventEmitter.forEach():dart',
  'EventEmitter.handleError():dart',
  'EventEmitter.isBroadcast:dart',
  'EventEmitter.isEmpty:dart',
  'EventEmitter.join():dart',
  'EventEmitter.last:dart',
  'EventEmitter.lastWhere():dart',
  'EventEmitter.length:dart',
  'EventEmitter.listen():dart',
  'EventEmitter.map():dart',
  'EventEmitter.pipe():dart',
  'EventEmitter.reduce():dart',
  'EventEmitter.single:dart',
  'EventEmitter.singleWhere():dart',
  'EventEmitter.skip():dart',
  'EventEmitter.skipWhile():dart',
  'EventEmitter.take():dart',
  'EventEmitter.takeWhile():dart',
  'EventEmitter.timeout():dart',
  'EventEmitter.toList():dart',
  'EventEmitter.toSet():dart',
  'EventEmitter.transform():dart',
  'EventEmitter.where():dart',

  'ExceptionHandler',
  'ExceptionHandler#exceptionToString()',
  'ExceptionHandler.call()',

  /*
   RxJS API - may need to maintain as RxJS evolves
  */
  'EventEmitter.mapTo():js',
  'EventEmitter.next():js',
  'EventEmitter.materialize():js',
  'EventEmitter.merge():js',
  'EventEmitter.mergeAll():js',
  'EventEmitter.mergeMap():js',
  'EventEmitter.mergeMapTo():js',
  'EventEmitter.multicast():js',
  'EventEmitter.observeOn():js',
  'EventEmitter.remove():js',
  'EventEmitter.repeat():js',
  'EventEmitter.retry():js',
  'EventEmitter.retryWhen():js',
  'EventEmitter.throttle():js',
  'EventEmitter.toPromise():js',
  'EventEmitter.window():js',
  'EventEmitter.windowCount():js',
  'EventEmitter.windowTime():js',
  'EventEmitter.windowToggle():js',
  'EventEmitter.windowWhen():js',
  'EventEmitter.withLatestFrom():js',
  'EventEmitter.zip():js',
  'EventEmitter.zipAll():js',

  'Observable:js',
  'Observable#combineLatest():js',
  'Observable#concat():js',
  'Observable#create():js',
  'Observable#defer():js',
  'Observable#empty():js',
  'Observable#forkJoin():js',
  'Observable#from():js',
  'Observable#fromArray():js',
  'Observable#fromEvent():js',
  'Observable#fromEventPattern():js',
  'Observable#fromPromise():js',
  'Observable#interval():js',
  'Observable#merge():js',
  'Observable#never():js',
  'Observable#of():js',
  'Observable#range():js',
  'Observable#throw():js',
  'Observable#timer():js',
  'Observable#zip():js',
  'Observable.buffer():js',
  'Observable.bufferCount():js',
  'Observable.bufferTime():js',
  'Observable.bufferToggle():js',
  'Observable.bufferWhen():js',
  'Observable.catch():js',
  'Observable.combineAll():js',
  'Observable.combineLatest():js',
  'Observable.concat():js',
  'Observable.concatAll():js',
  'Observable.concatMap():js',
  'Observable.concatMapTo():js',
  'Observable.count():js',
  'Observable.debounce():js',
  'Observable.debounceTime():js',
  'Observable.defaultIfEmpty():js',
  'Observable.delay():js',
  'Observable.dematerialize():js',
  'Observable.distinctUntilChanged():js',
  'Observable.do():js',
  'Observable.every():js',
  'Observable.expand():js',
  'Observable.filter():js',
  'Observable.finally():js',
  'Observable.first():js',
  'Observable.flatMap():js',
  'Observable.flatMapTo():js',
  'Observable.forEach():js',
  'Observable.groupBy():js',
  'Observable.ignoreElements():js',
  'Observable.last():js',
  'Observable.lift():js',
  'Observable.map():js',
  'Observable.mapTo():js',
  'Observable.materialize():js',
  'Observable.merge():js',
  'Observable.mergeAll():js',
  'Observable.mergeMap():js',
  'Observable.mergeMapTo():js',
  'Observable.multicast():js',
  'Observable.observeOn():js',

  'OutputMetadata',
  'OutputMetadata.bindingPropertyName',
  'enableDevMode():js',
  'ExpressionChangedAfterItHasBeenCheckedException',
  'ExpressionChangedAfterItHasBeenCheckedException.message',
  'ExpressionChangedAfterItHasBeenCheckedException.stackTrace',
  'FORM_PROVIDERS',
  'FORM_BINDINGS',
  'FORM_DIRECTIVES',
  'FormBuilder',
  'FormBuilder.array()',
  'FormBuilder.control()',
  'FormBuilder.group()',
  'Host',
  'HostBinding',
  'HostBinding.hostPropertyName',
  'HostBindingMetadata',
  'HostBindingMetadata.hostPropertyName',
  'HostListener',
  'HostListener.args',
  'HostListener.eventName',
  'HostListenerMetadata',
  'HostListenerMetadata.args',
  'HostListenerMetadata.eventName',
  'HostMetadata',
  'Inject',
  'Inject.token',
  'InjectMetadata',
  'InjectMetadata.token',
  'Injectable',
  'InjectableMetadata',
  'Injector#fromResolvedBindings()',
  'Injector#fromResolvedProviders()',
  'Injector#resolve()',
  'Injector#resolveAndCreate()',
  'Injector',
  'Injector.createChildFromResolved()',
  'Injector.debugContext()',
  'Injector.displayName',
  'Injector.get()',
  'Injector.getAt()',
  'Injector.getOptional()',
  'Injector.instantiateResolved()',
  'Injector.internalStrategy',
  'Injector.parent',
  'Injector.resolveAndCreateChild()',
  'Injector.resolveAndInstantiate()',
  'InstantiationError',
  'InstantiationError.addKey()',
  'InstantiationError.causeKey',
  'InstantiationError.context',
  'InstantiationError.injectors',
  'InstantiationError.injectors=',
  'InstantiationError.keys',
  'InstantiationError.keys=',
  'InstantiationError.message',
  'InstantiationError.stackTrace',
  'InstantiationError.wrapperMessage',
  'InvalidProviderError',
  'InvalidProviderError.message',
  'InvalidProviderError.stackTrace',
  'IterableDiffers#create()',
  'IterableDiffers#extend()',
  'IterableDiffers',
  'IterableDiffers.factories',
  'IterableDiffers.find()',
  'JsonPipe',
  'JsonPipe.transform()',
  'Key#get()',
  'Key#numberOfKeys',
  'Key',
  'Key.displayName',
  'Key.id',
  'Key.id=',
  'Key.token',
  'Key.token=',
  'KeyValueDiffers#create()',
  'KeyValueDiffers#extend()',
  'KeyValueDiffers',
  'KeyValueDiffers.factories',
  'KeyValueDiffers.find()',
  'LowerCasePipe',
  'LowerCasePipe.transform()',
  'NG_VALIDATORS',
  'NG_VALUE_ACCESSOR',
  'NG_ASYNC_VALIDATORS',
  'NgClass',
  'NgClass.doCheck():dart',
  'NgClass.$'+'$LifecycleDoCheck():js',
  'NgClass.initialClasses=',
  'NgClass.onDestroy():dart',
  'NgClass.$'+'$LifecycleOnDestroy():js',
  'NgClass.rawClass=',
  'NgControl',
  'NgControl.control',
  'NgControl.dirty',
  'NgControl.errors',
  'NgControl.name',
  'NgControl.name=',
  'NgControl.path',
  'NgControl.pristine',
  'NgControl.touched',
  'NgControl.untouched',
  'NgControl.valid',
  'NgControl.validator',
  'NgControl.asyncValidator',
  'NgControl.value',
  'NgControl.valueAccessor',
  'NgControl.valueAccessor=',
  'NgControlGroup',
  'NgControlGroup.control',
  'NgControlGroup.dirty',
  'NgControlGroup.errors',
  'NgControlGroup.formDirective',
  'NgControlGroup.name',
  'NgControlGroup.name=',
  'NgControlGroup.onDestroy()',
  'NgControlGroup.onInit()',
  'NgControlGroup.path',
  'NgControlGroup.pristine',
  'NgControlGroup.touched',
  'NgControlGroup.untouched',
  'NgControlGroup.valid',
  'NgControlGroup.value',
  'NgControlGroup.validator',
  'NgControlGroup.asyncValidator',
  'NgControlStatus',
  'NgControlStatus.ngClassDirty',
  'NgControlStatus.ngClassInvalid',
  'NgControlStatus.ngClassPristine',
  'NgControlStatus.ngClassTouched',
  'NgControlStatus.ngClassUntouched',
  'NgControlStatus.ngClassValid',
  'NgControlName',
  'NgControlName.control',
  'NgControlName.dirty',
  'NgControlName.errors',
  'NgControlName.formDirective',
  'NgControlName.model',
  'NgControlName.model=',
  'NgControlName.name',
  'NgControlName.name=',
  'NgControlName.onChanges()',
  'NgControlName.onDestroy()',
  'NgControlName.path',
  'NgControlName.pristine',
  'NgControlName.touched',
  'NgControlName.untouched',
  'NgControlName.update',
  'NgControlName.update=',
  'NgControlName.valid',
  'NgControlName.validator',
  'NgControlName.asyncValidator',
  'NgControlName.value',
  'NgControlName.valueAccessor',
  'NgControlName.valueAccessor=',
  'NgControlName.viewModel',
  'NgControlName.viewModel=',
  'NgControlName.viewToModelUpdate()',
  'NgFor',
  'NgFor.doCheck():dart',
  'NgFor.$'+'$LifecycleDoCheck():js',
  'NgFor.ngForOf=',
  'NgFor.ngForTemplate=',
  'NgForm',
  'NgForm.addControl()',
  'NgForm.addControlGroup()',
  'NgForm.control',
  'NgForm.controls',
  'NgForm.dirty',
  'NgForm.errors',
  'NgForm.form',
  'NgForm.form=',
  'NgForm.formDirective',
  'NgForm.getControl()',
  'NgForm.getControlGroup()',
  'NgForm.name',
  'NgForm.name=',
  'NgForm.ngSubmit',
  'NgForm.ngSubmit=',
  'NgForm.onSubmit()',
  'NgForm.path',
  'NgForm.pristine',
  'NgForm.removeControl()',
  'NgForm.removeControlGroup()',
  'NgForm.touched',
  'NgForm.untouched',
  'NgForm.updateModel()',
  'NgForm.valid',
  'NgForm.value',
  'NgFormControl',
  'NgFormControl.control',
  'NgFormControl.dirty',
  'NgFormControl.errors',
  'NgFormControl.form',
  'NgFormControl.form=',
  'NgFormControl.model',
  'NgFormControl.model=',
  'NgFormControl.name',
  'NgFormControl.name=',
  'NgFormControl.onChanges()',
  'NgFormControl.path',
  'NgFormControl.pristine',
  'NgFormControl.touched',
  'NgFormControl.untouched',
  'NgFormControl.update',
  'NgFormControl.update=',
  'NgFormControl.valid',
  'NgFormControl.validator',
  'NgFormControl.asyncValidator',
  'NgFormControl.value',
  'NgFormControl.valueAccessor',
  'NgFormControl.valueAccessor=',
  'NgFormControl.viewModel',
  'NgFormControl.viewModel=',
  'NgFormControl.viewToModelUpdate()',
  'NgFormModel',
  'NgFormModel.addControl()',
  'NgFormModel.addControlGroup()',
  'NgFormModel.control',
  'NgFormModel.directives',
  'NgFormModel.directives=',
  'NgFormModel.dirty',
  'NgFormModel.errors',
  'NgFormModel.form',
  'NgFormModel.form=',
  'NgFormModel.formDirective',
  'NgFormModel.getControl()',
  'NgFormModel.getControlGroup()',
  'NgFormModel.name',
  'NgFormModel.name=',
  'NgFormModel.ngSubmit',
  'NgFormModel.ngSubmit=',
  'NgFormModel.onChanges()',
  'NgFormModel.onSubmit()',
  'NgFormModel.path',
  'NgFormModel.pristine',
  'NgFormModel.removeControl()',
  'NgFormModel.removeControlGroup()',
  'NgFormModel.touched',
  'NgFormModel.untouched',
  'NgFormModel.updateModel()',
  'NgFormModel.valid',
  'NgFormModel.value',
  'NgIf',
  'NgIf.ngIf=',
  'NgModel',
  'NgModel.control',
  'NgModel.dirty',
  'NgModel.errors',
  'NgModel.model',
  'NgModel.model=',
  'NgModel.name',
  'NgModel.name=',
  'NgModel.onChanges()',
  'NgModel.path',
  'NgModel.pristine',
  'NgModel.touched',
  'NgModel.untouched',
  'NgModel.update',
  'NgModel.update=',
  'NgModel.valid',
  'NgModel.validator',
  'NgModel.asyncValidator',
  'NgModel.value',
  'NgModel.valueAccessor',
  'NgModel.valueAccessor=',
  'NgModel.viewModel',
  'NgModel.viewModel=',
  'NgModel.viewToModelUpdate()',
  'NgSelectOption',
  'NgStyle',
  'NgStyle.doCheck():dart',
  'NgStyle.$'+'$LifecycleDoCheck():js',
  'NgStyle.rawStyle=',
  'NgSwitch',
  'NgSwitch.ngSwitch=',
  'NgSwitchDefault',
  'NgSwitchWhen',
  'NgSwitchWhen.ngSwitchWhen=',
  'NgZone',
  'NgZone.hasPendingAsyncTasks',
  'NgZone.hasPendingMicrotasks',
  'NgZone.hasPendingTimers',
  'NgZone.onError',
  'NgZone.onEventDone',
  'NgZone.onTurnDone',
  'NgZone.onTurnStart',
  'NgZone.overrideOnErrorHandler()',
  'NgZone.overrideOnEventDone()',
  'NgZone.overrideOnTurnDone()',
  'NgZone.overrideOnTurnStart()',
  'NgZone.run()',
  'NgZone.runOutsideAngular()',
  'NgZoneError',
  'NgZoneError.error',
  'NgZoneError.stackTrace',
  'NoAnnotationError',
  'NoAnnotationError.message',
  'NoAnnotationError.stackTrace',
  'NoProviderError',
  'NoProviderError.addKey()',
  'NoProviderError.constructResolvingMessage',
  'NoProviderError.constructResolvingMessage=',
  'NoProviderError.context',
  'NoProviderError.injectors',
  'NoProviderError.injectors=',
  'NoProviderError.keys',
  'NoProviderError.keys=',
  'NoProviderError.message',
  'NoProviderError.message=',
  'NoProviderError.stackTrace',
  'NumberPipe',
  'ObservableListDiff.check():dart',
  'ObservableListDiff.collection:dart',
  'ObservableListDiff.diff():dart',
  'ObservableListDiff.forEachAddedItem():dart',
  'ObservableListDiff.forEachItem():dart',
  'ObservableListDiff.forEachMovedItem():dart',
  'ObservableListDiff.forEachPreviousItem():dart',
  'ObservableListDiff.forEachRemovedItem():dart',
  'ObservableListDiff.isDirty:dart',
  'ObservableListDiff.length:dart',
  'ObservableListDiff.onDestroy():dart',
  'ObservableListDiff:dart',
  'ObservableListDiffFactory.create():dart',
  'ObservableListDiffFactory.supports():dart',
  'ObservableListDiffFactory:dart',
  'OpaqueToken',
  'Optional',
  'OptionalMetadata',
  'OutOfBoundsError',
  'OutOfBoundsError.message',
  'OutOfBoundsError.stackTrace',
  'PercentPipe',
  'PercentPipe.transform()',
  'Pipe',
  'Pipe.name',
  'Pipe.pure',
  'PipeMetadata',
  'PipeMetadata.name',
  'PipeMetadata.pure',
  'PlatformRef',
  /*
   Abstract methods
  'PlatformRef.application()',
  'PlatformRef.asyncApplication()',
  'PlatformRef.dispose()',
  'PlatformRef.registerDisposeListener()',
  */
  'PlatformRef.injector',
  'Input',
  'Input.bindingPropertyName',
  'InputMetadata',
  'InputMetadata.bindingPropertyName',
  'ProtoViewRef',
  'Query',
  'Query.descendants',
  'Query.first',
  'Query.isVarBindingQuery',
  'Query.isViewQuery',
  'Query.selector',
  'Query.token',
  'Query.varBindings',
  'QueryList',
  'QueryList.any():dart',
  'QueryList.contains():dart',
  'QueryList.elementAt():dart',
  'QueryList.every():dart',
  'QueryList.expand():dart',
  'QueryList.notifyOnChanges():',
  'QueryList.first',
  'QueryList.firstWhere():dart',
  'QueryList.fold():dart',
  'QueryList.forEach():dart',
  'QueryList.isEmpty',
  'QueryList.isNotEmpty',
  'QueryList.iterator',
  'QueryList.join():dart',
  'QueryList.last',
  'QueryList.lastWhere():dart',
  'QueryList.length',
  'QueryList.map()',
  'QueryList.changes',
  'QueryList.reduce():dart',
  'QueryList.reset()',
  'QueryList.single',
  'QueryList.singleWhere():dart',
  'QueryList.skip():dart',
  'QueryList.skipWhile():dart',
  'QueryList.take():dart',
  'QueryList.takeWhile():dart',
  'QueryList.toList():dart',
  'QueryList.toSet():dart',
  'QueryList.where():dart',
  'QueryMetadata',
  'QueryMetadata.descendants',
  'QueryMetadata.first',
  'QueryMetadata.isVarBindingQuery',
  'QueryMetadata.isViewQuery',
  'QueryMetadata.selector',
  'QueryMetadata.token',
  'QueryMetadata.varBindings',
  'RenderFragmentRef',
  'RenderProtoViewRef',
  'RenderViewRef',
  'RenderViewWithFragments',
  'RenderViewWithFragments.fragmentRefs',
  'RenderViewWithFragments.fragmentRefs=',
  'RenderViewWithFragments.viewRef',
  'RenderViewWithFragments.viewRef=',
  'Renderer',
  /*
   Abstract methods
  'Renderer.attachFragmentAfterElement()',
  'Renderer.attachFragmentAfterFragment()',
  'Renderer.createProtoView()',
  'Renderer.registerComponentTemplate()',
  'Renderer.createRootHostView()',
  'Renderer.createView()',
  'Renderer.dehydrateView()',
   'Renderer.destroyView()',
   'Renderer.detachFragment()',
   'Renderer.getNativeElementSync()',
   'Renderer.hydrateView()',
   'Renderer.invokeElementMethod()',
   'Renderer.setElementAttribute()',
   'Renderer.setElementClass()',
   'Renderer.setElementProperty()',
   'Renderer.setElementStyle()',
   'Renderer.setEventDispatcher()',
   'Renderer.setText()',
  */
  'ResolvedBinding:dart',
  'ResolvedProvider:dart',
  'ResolvedProvider.key:dart',
  'ResolvedProvider.key=:dart',
  'ResolvedProvider.multiProvider:dart',
  'ResolvedProvider.multiProvider=:dart',
  'ResolvedProvider.resolvedFactories:dart',
  'ResolvedProvider.resolvedFactories=:dart',
  'ResolvedFactory',
  'ResolvedFactory.dependencies',
  'ResolvedFactory.dependencies=',
  'ResolvedFactory.factory',
  'ResolvedFactory.factory=',
  'Scope#all()',
  'Scope#light()',
  'Scope#view()',
  'Scope',  // TODO(misko): rename?
  'SelectControlValueAccessor',
  'SelectControlValueAccessor.onChange',
  'SelectControlValueAccessor.onChange=',
  'SelectControlValueAccessor.onTouched',
  'SelectControlValueAccessor.onTouched=',
  'SelectControlValueAccessor.registerOnChange()',
  'SelectControlValueAccessor.registerOnTouched()',
  'SelectControlValueAccessor.value',
  'SelectControlValueAccessor.value=',
  'SelectControlValueAccessor.writeValue()',
  'Self',
  'SelfMetadata',
  'SkipSelf',
  'SkipSelfMetadata',
  'SlicePipe',
  'SlicePipe.supports()',
  'SlicePipe.transform()',
  'SimpleChange',
  'SimpleChange.currentValue',
  'SimpleChange.currentValue=',
  'SimpleChange.previousValue',
  'SimpleChange.previousValue=',
  'SimpleChange.isFirstChange()',
  'TemplateRef',
  'TemplateRef.elementRef',
  'TemplateRef.elementRef=',
  /*
   Abstract method
   'TemplateRef.hasLocal()',
  */
  'Type:js',
  'Title',
  'Title.getTitle()',
  'Title.setTitle()',
  'TypeLiteral',
  'TypeLiteral.type',
  'UpperCasePipe',
  'UpperCasePipe.transform()',
  'UrlResolver',
  'UrlResolver.resolve()',
  'Validators#compose()',
  'Validators#composeAsync()',
  'Validators#nullValidator()',
  'Validators#required()',
  'Validators#minLength()',
  'Validators#maxLength()',
  'Validators',
  'View',
  'View.directives',
  'View.encapsulation',
  'View.pipes',
  'View.styleUrls',
  'View.styles',
  'View.template',
  'View.templateUrl',
  'ViewChild',
  'ViewChild.descendants',
  'ViewChild.first',
  'ViewChild.isVarBindingQuery',
  'ViewChild.isViewQuery',
  'ViewChild.selector',
  'ViewChild.token',
  'ViewChild.varBindings',
  'ViewChildMetadata',
  'ViewChildMetadata.descendants',
  'ViewChildMetadata.first',
  'ViewChildMetadata.isVarBindingQuery',
  'ViewChildMetadata.isViewQuery',
  'ViewChildMetadata.selector',
  'ViewChildMetadata.token',
  'ViewChildMetadata.varBindings',
  'ViewChildren',
  'ViewChildren.descendants',
  'ViewChildren.first',
  'ViewChildren.isVarBindingQuery',
  'ViewChildren.isViewQuery',
  'ViewChildren.selector',
  'ViewChildren.token',
  'ViewChildren.varBindings',
  'ViewChildrenMetadata',
  'ViewChildrenMetadata.descendants',
  'ViewChildrenMetadata.first',
  'ViewChildrenMetadata.isVarBindingQuery',
  'ViewChildrenMetadata.isViewQuery',
  'ViewChildrenMetadata.selector',
  'ViewChildrenMetadata.token',
  'ViewChildrenMetadata.varBindings',
  'ViewContainerRef',
  'ViewContainerRef.clear()',
  /*
   Abstract methods
   'ViewContainerRef.createEmbeddedView()',
   'ViewContainerRef.createHostView()',
   'ViewContainerRef.detach()',
  */
  'ViewContainerRef.element',
  'ViewContainerRef.element=',
  /*
   'ViewContainerRef.get()',
   'ViewContainerRef.indexOf()',
   'ViewContainerRef.insert()',
  */
  'ViewContainerRef.length',
  'ViewEncapsulation#Emulated',
  'ViewEncapsulation#Native',
  'ViewEncapsulation#None',
  'ViewEncapsulation#values',
  'ViewEncapsulation',
  'ViewEncapsulation.index',
  'ViewMetadata',
  'ViewMetadata.directives',
  'ViewMetadata.encapsulation',
  'ViewMetadata.pipes',
  'ViewMetadata.styleUrls',
  'ViewMetadata.styles',
  'ViewMetadata.template',
  'ViewMetadata.templateUrl',
  'ViewQuery',
  'ViewQuery.descendants',
  'ViewQuery.first',
  'ViewQuery.isVarBindingQuery',
  'ViewQuery.isViewQuery',
  'ViewQuery.selector',
  'ViewQuery.token',
  'ViewQuery.varBindings',
  'ViewQueryMetadata',
  'ViewQueryMetadata.descendants',
  'ViewQueryMetadata.first',
  'ViewQueryMetadata.isVarBindingQuery',
  'ViewQueryMetadata.isViewQuery',
  'ViewQueryMetadata.selector',
  'ViewQueryMetadata.token',
  'ViewQueryMetadata.varBindings',
  'ViewRef',
  'ViewRef.changeDetectorRef',
  'ViewRef.changeDetectorRef=',
  /*
   Abstract method
   'ViewRef.setLocal()',
  */
  'ViewResolver',
  'ViewResolver.resolve()',
  'WrappedException',
  'WrappedException.context',
  'WrappedException.message',
  'WrappedException.stackTrace',
  'WrappedException.wrapperMessage',
  'WrappedValue#wrap()',
  'WrappedValue',
  'WrappedValue.wrapped',
  'WrappedValue.wrapped=',
  'WtfScopeFn:dart',
  'ZeroArgFunction:dart',
  'applicationCommonProviders()',
  'asNativeElements()',
  'bind()',
  'provide()',
  'bootstrap():js',
  'createNgZone()',
  'forwardRef():js',
  'inspectElement()',
  'inspectNativeElement()',
  'platform():js',
  'platformProviders()',
  'platformCommon()',
  'resolveForwardRef():js',
  'wtfCreateScope():js',
  'wtfCreateScope:dart',
  'wtfEndTimeRange():js',
  'wtfEndTimeRange:dart',
  'wtfLeave():js',
  'wtfLeave:dart',
  'wtfStartTimeRange():js',
  'wtfStartTimeRange:dart',
  'AfterContentChecked:dart',
  'AfterContentInit:dart',
  'AfterViewChecked:dart',
  'AfterViewInit:dart',
  'ControlValueAccessor:dart',
  'DoCheck:dart',
  'Form:dart',
  'HostViewRef:dart',
  'HostViewRef.changeDetectorRef',
  'HostViewRef.changeDetectorRef=',
  'IterableDifferFactory:dart',
  'IterableDiffer:dart',
  'KeyValueDifferFactory:dart',
  'KeyValueDiffer:dart',
  'OnChanges:dart',
  'OnDestroy:dart',
  'OnInit:dart',
  'PipeOnDestroy:dart',
  'PipeTransform:dart',
  'RenderBeginCmd:dart',
  'RenderBeginCmd.isBound',
  'RenderBeginCmd.ngContentIndex',
  'RenderBeginComponentCmd:dart',
  'RenderBeginComponentCmd.attrNameAndValues',
  'RenderBeginComponentCmd.eventTargetAndNames',
  'RenderBeginComponentCmd.isBound',
  'RenderBeginComponentCmd.name',
  'RenderBeginComponentCmd.ngContentIndex',
  'RenderBeginComponentCmd.templateId',
  'RenderBeginElementCmd:dart',
  'RenderBeginElementCmd.attrNameAndValues',
  'RenderBeginElementCmd.isBound',
  'RenderBeginElementCmd.eventTargetAndNames',
  'RenderBeginElementCmd.name',
  'RenderBeginElementCmd.ngContentIndex',
  'RenderCommandVisitor:dart',
  'RenderEmbeddedTemplateCmd:dart',
  'RenderEmbeddedTemplateCmd.attrNameAndValues',
  'RenderEmbeddedTemplateCmd.children',
  'RenderEmbeddedTemplateCmd.eventTargetAndNames',
  'RenderEmbeddedTemplateCmd.isBound',
  'RenderEmbeddedTemplateCmd.isMerged',
  'RenderEmbeddedTemplateCmd.name',
  'RenderEmbeddedTemplateCmd.ngContentIndex',
  'RenderNgContentCmd:dart',
  'RenderNgContentCmd.ngContentIndex',
  'RenderTemplateCmd:dart',
  'RenderTextCmd:dart',
  'RenderTextCmd.isBound',
  'RenderTextCmd.ngContentIndex',
  'RenderTextCmd.value',
  'RenderElementRef:dart',
  'RenderElementRef.boundElementIndex',
  'RenderElementRef.boundElementIndex=',
  'RenderElementRef.renderView',
  'RenderElementRef.renderView=',
  'RenderEventDispatcher:dart',
  'RenderNgContentCmd.index',
  'Stream:dart',
  'Stream.any():dart',
  'Stream.asBroadcastStream():dart',
  'Stream.asyncExpand():dart',
  'Stream.asyncMap():dart',
  'Stream.contains():dart',
  'Stream.distinct():dart',
  'Stream.drain():dart',
  'Stream.elementAt():dart',
  'Stream.every():dart',
  'Stream.expand():dart',
  'Stream.first:dart',
  'Stream.firstWhere():dart',
  'Stream.fold():dart',
  'Stream.forEach():dart',
  'Stream.handleError():dart',
  'Stream.isBroadcast:dart',
  'Stream.isEmpty:dart',
  'Stream.join():dart',
  'Stream.last:dart',
  'Stream.lastWhere():dart',
  'Stream.length:dart',
  'Stream.map():dart',
  'Stream.pipe():dart',
  'Stream.reduce():dart',
  'Stream.single:dart',
  'Stream.singleWhere():dart',
  'Stream.skip():dart',
  'Stream.skipWhile():dart',
  'Stream.take():dart',
  'Stream.takeWhile():dart',
  'Stream.timeout():dart',
  'Stream.toList():dart',
  'Stream.toSet():dart',
  'Stream.transform():dart',
  'Stream.where():dart',
];

var NG_UPGRADE = [
  'UpgradeAdapter:js',
  'UpgradeAdapter.addProvider():js',
  'UpgradeAdapter.bootstrap():js',
  'UpgradeAdapter.compileNg2Components():js',
  'UpgradeAdapter.downgradeNg2Component():js',
  'UpgradeAdapter.downgradeNg2Provider():js',
  'UpgradeAdapter.upgradeNg1Component():js',
  'UpgradeAdapter.upgradeNg1Provider():js',
  'UpgradeAdapterRef:js',
  'UpgradeAdapterRef.dispose():js',
  'UpgradeAdapterRef.ready():js'
];

var NG_API = [].concat(NG_ALL).concat(NG_UPGRADE);

export function main() {
  /**
  var x = getSymbolsFromLibrary('ng');
  x.sort();
  var parts = [];
  x.forEach((i) => parts.push(`'${i'`));
  print(`[ ${parts.join(',
  ')} ]`);
   */

  describe('public API', () => {
    it('should fail if public API has changed',
       () => { expect(new SymbolsDiff(getSymbolsFromLibrary('ng'), NG_API).errors).toEqual([]); });
  });
}
