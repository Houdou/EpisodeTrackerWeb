System.register(['@angular/router', './list/list.routes', './home/home.routes', './settings/settings.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, list_routes_1, home_routes_1, settings_routes_1;
    var routes, EPI_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (list_routes_1_1) {
                list_routes_1 = list_routes_1_1;
            },
            function (home_routes_1_1) {
                home_routes_1 = home_routes_1_1;
            },
            function (settings_routes_1_1) {
                settings_routes_1 = settings_routes_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', redirectTo: '/home', terminal: true }
            ].concat(list_routes_1.listRoutes, home_routes_1.homeRoutes, settings_routes_1.settingsRoutes));
            exports_1("EPI_ROUTER_PROVIDERS", EPI_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=epi.routes.js.map