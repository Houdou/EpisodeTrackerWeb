System.register(['@angular/core', '@angular/platform-browser-dynamic', '@angular/platform-browser', '@osw/lib/lib', './epi.main', './epi.routes', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, platform_browser_1, lib_1, epi_main_1, epi_routes_1, http_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (lib_1_1) {
                lib_1 = lib_1_1;
            },
            function (epi_main_1_1) {
                epi_main_1 = epi_main_1_1;
            },
            function (epi_routes_1_1) {
                epi_routes_1 = epi_routes_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            // enableProdMode();
            platform_browser_dynamic_1.bootstrap(epi_main_1.EpiMain, [
                http_1.HTTP_PROVIDERS,
                epi_routes_1.EPI_ROUTER_PROVIDERS,
                core_1.provide(platform_browser_1.HAMMER_GESTURE_CONFIG, { useClass: lib_1.OSWGestureConfig })
            ]);
            FastClick.attach(document.body);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=main.js.map