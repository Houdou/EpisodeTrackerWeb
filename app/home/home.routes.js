System.register(['./home.component', './table/table.component', '../bangumi/bangumi.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, table_component_1, bangumi_component_1;
    var homeRoutes;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (table_component_1_1) {
                table_component_1 = table_component_1_1;
            },
            function (bangumi_component_1_1) {
                bangumi_component_1 = bangumi_component_1_1;
            }],
        execute: function() {
            exports_1("homeRoutes", homeRoutes = [
                {
                    path: 'home',
                    component: home_component_1.EpiHomeComponent,
                    children: [
                        { path: ':id', component: bangumi_component_1.EpiBangumiComponent, terminal: true },
                        { path: '', component: table_component_1.EpiHomeTableComponent }
                    ]
                }
            ]);
        }
    }
});
//# sourceMappingURL=home.routes.js.map