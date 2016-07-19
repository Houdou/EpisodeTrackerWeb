System.register(['./Settings.component', './table/table.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Settings_component_1, table_component_1;
    var settingsRoutes;
    return {
        setters:[
            function (Settings_component_1_1) {
                Settings_component_1 = Settings_component_1_1;
            },
            function (table_component_1_1) {
                table_component_1 = table_component_1_1;
            }],
        execute: function() {
            exports_1("settingsRoutes", settingsRoutes = [
                {
                    path: 'settings',
                    component: Settings_component_1.EpiSettingsComponent,
                    children: [
                        { path: '', component: table_component_1.EpiSettingsTableComponent }
                    ]
                }
            ]);
        }
    }
});
//# sourceMappingURL=settings.routes.js.map