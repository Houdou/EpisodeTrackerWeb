System.register(['./list.component', './table/table.component', '../bangumi/bangumi.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var list_component_1, table_component_1, bangumi_component_1;
    var listRoutes;
    return {
        setters:[
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (table_component_1_1) {
                table_component_1 = table_component_1_1;
            },
            function (bangumi_component_1_1) {
                bangumi_component_1 = bangumi_component_1_1;
            }],
        execute: function() {
            exports_1("listRoutes", listRoutes = [
                {
                    path: 'list',
                    component: list_component_1.EpiListComponent,
                    children: [
                        { path: ':id', component: bangumi_component_1.EpiBangumiComponent, terminal: true },
                        { path: '', component: table_component_1.EpiListTableComponent }
                    ]
                }
            ]);
        }
    }
});
//# sourceMappingURL=list.routes.js.map