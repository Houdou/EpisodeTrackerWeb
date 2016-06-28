System.register(['@angular/router', './list/epi.list.component', './home/epi.home.component', './settings/epi.settings.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, epi_list_component_1, epi_home_component_1, epi_settings_component_1;
    var routes, EPI_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (epi_list_component_1_1) {
                epi_list_component_1 = epi_list_component_1_1;
            },
            function (epi_home_component_1_1) {
                epi_home_component_1 = epi_home_component_1_1;
            },
            function (epi_settings_component_1_1) {
                epi_settings_component_1 = epi_settings_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', redirectTo: '/home', terminal: true },
                { path: 'list', component: epi_list_component_1.EpiListComponent },
                { path: 'home', component: epi_home_component_1.EpiHomeComponent, terminal: true },
                { path: 'settings', component: epi_settings_component_1.EpiSettingsComponent }
            ]);
            exports_1("EPI_ROUTER_PROVIDERS", EPI_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=epi.routes.js.map