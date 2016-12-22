/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export default {
  entry: '../../../dist/packages-dist/platform-universal/testing/index.js',
  dest: '../../../dist/packages-dist/platform-universal/bundles/platform-universal-testing.umd.js',
  format: 'umd',
  moduleName: 'ng.platformUniversal.testing',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-server': 'ng.platformServer',
    '@angular/platform-universal': 'ng.platformUniversal'
  }
};
