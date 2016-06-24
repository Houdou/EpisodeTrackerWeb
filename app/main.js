System.register(['@angular/platform-browser-dynamic', './epi.main', './epi.routes', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, epi_main_1, epi_routes_1, http_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
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
            platform_browser_dynamic_1.bootstrap(epi_main_1.EpiMain, [
                http_1.HTTP_PROVIDERS,
                epi_routes_1.EPI_ROUTER_PROVIDERS
            ]);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=main.js.map