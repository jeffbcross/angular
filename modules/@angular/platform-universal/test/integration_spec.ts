/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component, NgModule, destroyPlatform} from '@angular/core';
import {async} from '@angular/core/testing';
import {getDOM} from '@angular/platform-browser/src/dom/dom_adapter';
import {ServerModule, platformDynamicServer} from '@angular/platform-server';
import { platformUniversal } from '@angular/platform-universal';

function writeBody(html: string): any {
  const dom = getDOM();
  const doc = dom.defaultDoc();
  const body = dom.querySelector(doc, 'body');
  dom.setInnerHTML(body, html);
  return body;
}


@Component({selector: 'app', template: `Works!`})
class MyServerApp {
}


@NgModule({declarations: [MyServerApp], imports: [ServerModule], bootstrap: [MyServerApp]})
class ExampleModule {
}

export function main() {
  if (getDOM().supportsDOMEvents()) return;  // NODE only

  describe('platform-server integration', () => {

    beforeEach(() => destroyPlatform());
    afterEach(() => destroyPlatform());

    fit('should bootstrap', async(() => {
         writeBody('<app></app>');
         platformUniversal().serializeModule(ExampleModule).then((body) => {
           expect(body).toContain('Works!');
         });
       }));
  });
}
