/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function(global) {

  var ngVer = '@2.0.0-rc.4'; // lock in the angular package version; do not let it float to current!

  //map tells the System loader where to look for things
  var  map = {
    'app':                        'app', // 'dist',
    '@angular2-material':         'node_modules/@angular2-material',
    '@osw':                       'node_modules/@osw',
    'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
    'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api' // get latest
  };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var materialPkg = [
      'button',
      'card',
      'checkbox',
      'core',
      'grid-list',
      'icon',
      'input',
      'list',
      'progress-bar',
      'progress-circle',
      'radio',
      'sidenav',
      'slide-toggle',
      'tabs',
      'toolbar',
  ];

  materialPkg.forEach(function(pkgName) {
      packages['@angular2-material/' + pkgName] = {main: pkgName + '.js'};
  });

  var oswPkg = [
      'lib',
      'scroll',
      'navigation',
      'tabs',
      'table',
  ];

  oswPkg.forEach(function(pkgName) {
      packages['@osw/' + pkgName] = {main: pkgName + '.js'};
  });

  var packageNames = [
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router-deprecated',
      '@angular/testing',
      '@angular/upgrade',
  ];

  // add map entries for angular packages in the form '@angular/common': 'https://npmcdn.com/@angular/common@0.0.0-3'
  packageNames.forEach(function(pkgName) {
    map[pkgName] = 'https://npmcdn.com/' + pkgName + ngVer;
  });

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  map['@angular/router'] = 'https://npmcdn.com/@angular/router@3.0.0-beta.2';
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    transpiler: 'typescript',
    typescriptOptions: {
      emitDecoratorMetadata: true
    },
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/