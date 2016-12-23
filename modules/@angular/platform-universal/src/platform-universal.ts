/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule, NgModuleRef, NgModuleFactory, Type } from '@angular/core';
import { platformServer, platformDynamicServer } from '@angular/platform-server';
const parse5 = require('parse5');
// export {Module, platformDynamicServer, platformServer} from './server';
// export * from './private_export';
export {VERSION} from './version';
import {getDOM} from '@angular/platform-browser/src/dom/dom_adapter';

export function platformUniversal () {
  return new PlatformUniversal();
}

export class PlatformUniversal {
  serializeModule<T>(module: Type<T>): Promise<HTMLDocument> {
    return platformDynamicServer()
      .bootstrapModule(module)
      .then(() => {
        return parse5.serialize(getDOM().defaultDoc(), {treeAdapter: parse5.treeAdapters.htmlparser2})
      });
  }

  serializeModuleFactory<T>(module: NgModuleFactory<T>) {

  }
}