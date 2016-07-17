System.register(['@angular/core', '@osw/navigation/navigation', '@osw/table/table', '@osw/table/cell.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navigation_1, table_1, cell_component_1;
    var EpiHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navigation_1_1) {
                navigation_1 = navigation_1_1;
            },
            function (table_1_1) {
                table_1 = table_1_1;
            },
            function (cell_component_1_1) {
                cell_component_1 = cell_component_1_1;
            }],
        execute: function() {
            EpiHomeComponent = (function () {
                function EpiHomeComponent() {
                    this.title = "Home";
                    this.cells = [
                        new cell_component_1.Cell("Table row 0"),
                        new cell_component_1.Cell("Table row 1"),
                        new cell_component_1.Cell("Table row 2"),
                        new cell_component_1.Cell("Table row 3"),
                        new cell_component_1.Cell("Table row 4"),
                        new cell_component_1.Cell("Table row 5"),
                        new cell_component_1.Cell("Table row 6"),
                        new cell_component_1.Cell("Table row 7"),
                        new cell_component_1.Cell("Table row 8"),
                        new cell_component_1.Cell("Table row 9"),
                        new cell_component_1.Cell("Table row 10"),
                        new cell_component_1.Cell("Table row 11"),
                        new cell_component_1.Cell("Table row 12"),
                        new cell_component_1.Cell("Table row 13"),
                        new cell_component_1.Cell("Table row 14"),
                        new cell_component_1.Cell("Table row 15"),
                        new cell_component_1.Cell("Table row 16"),
                        new cell_component_1.Cell("Table row 17"),
                        new cell_component_1.Cell("Table row 18"),
                        new cell_component_1.Cell("Table row 19"),
                        new cell_component_1.Cell("Table row 20"),
                        new cell_component_1.Cell("Table row 21"),
                        new cell_component_1.Cell("Table row 22"),
                        new cell_component_1.Cell("Table row 23"),
                        new cell_component_1.Cell("Table row 24"),
                        new cell_component_1.Cell("Table row 25"),
                        new cell_component_1.Cell("Table row 26"),
                        new cell_component_1.Cell("Table row 27"),
                        new cell_component_1.Cell("Table row 28"),
                        new cell_component_1.Cell("Table row 29"),
                        new cell_component_1.Cell("Table row 30"),
                        new cell_component_1.Cell("Table row 31"),
                        new cell_component_1.Cell("Table row 32"),
                        new cell_component_1.Cell("Table row 33"),
                        new cell_component_1.Cell("Table row 34"),
                        new cell_component_1.Cell("Table row 35"),
                        new cell_component_1.Cell("Table row 36"),
                        new cell_component_1.Cell("Table row 37"),
                        new cell_component_1.Cell("Table row 38"),
                        new cell_component_1.Cell("Table row 39"),
                        new cell_component_1.Cell("Table row 40"),
                        new cell_component_1.Cell("Table row 41"),
                        new cell_component_1.Cell("Table row 42"),
                        new cell_component_1.Cell("Table row 43"),
                        new cell_component_1.Cell("Table row 44"),
                        new cell_component_1.Cell("Table row 45"),
                        new cell_component_1.Cell("Table row 46"),
                        new cell_component_1.Cell("Table row 47"),
                        new cell_component_1.Cell("Table row 48"),
                        new cell_component_1.Cell("Table row 49"),
                        new cell_component_1.Cell("Table row 50"),
                        new cell_component_1.Cell("Table row 51"),
                        new cell_component_1.Cell("Table row 52"),
                        new cell_component_1.Cell("Table row 53"),
                        new cell_component_1.Cell("Table row 54"),
                        new cell_component_1.Cell("Table row 55"),
                        new cell_component_1.Cell("Table row 56"),
                        new cell_component_1.Cell("Table row 57"),
                        new cell_component_1.Cell("Table row 58"),
                        new cell_component_1.Cell("Table row 59"),
                        new cell_component_1.Cell("Table row 60"),
                        new cell_component_1.Cell("Table row 61"),
                        new cell_component_1.Cell("Table row 62"),
                        new cell_component_1.Cell("Table row 63"),
                        new cell_component_1.Cell("Table row 64"),
                        new cell_component_1.Cell("Table row 65"),
                        new cell_component_1.Cell("Table row 66"),
                        new cell_component_1.Cell("Table row 67"),
                        new cell_component_1.Cell("Table row 68"),
                        new cell_component_1.Cell("Table row 69"),
                        new cell_component_1.Cell("Table row 70"),
                        new cell_component_1.Cell("Table row 71"),
                        new cell_component_1.Cell("Table row 72"),
                        new cell_component_1.Cell("Table row 73"),
                        new cell_component_1.Cell("Table row 74"),
                        new cell_component_1.Cell("Table row 75"),
                        new cell_component_1.Cell("Table row 76"),
                        new cell_component_1.Cell("Table row 77"),
                        new cell_component_1.Cell("Table row 78"),
                        new cell_component_1.Cell("Table row 79"),
                        new cell_component_1.Cell("Table row 80"),
                        new cell_component_1.Cell("Table row 81"),
                        new cell_component_1.Cell("Table row 82"),
                        new cell_component_1.Cell("Table row 83"),
                        new cell_component_1.Cell("Table row 84"),
                        new cell_component_1.Cell("Table row 85"),
                        new cell_component_1.Cell("Table row 86"),
                        new cell_component_1.Cell("Table row 87"),
                        new cell_component_1.Cell("Table row 88"),
                        new cell_component_1.Cell("Table row 89"),
                        new cell_component_1.Cell("Table row 90"),
                        new cell_component_1.Cell("Table row 91"),
                        new cell_component_1.Cell("Table row 92"),
                        new cell_component_1.Cell("Table row 93"),
                        new cell_component_1.Cell("Table row 94"),
                        new cell_component_1.Cell("Table row 95"),
                        new cell_component_1.Cell("Table row 96"),
                        new cell_component_1.Cell("Table row 97"),
                        new cell_component_1.Cell("Table row 98"),
                        new cell_component_1.Cell("Table row 99"),
                    ];
                }
                EpiHomeComponent = __decorate([
                    core_1.Component({
                        selector: 'epi-home',
                        template: "\n\t\t<osw-navigation [isTranslucent]=\"true\" [title]=\"title\">\n\t\t\t<template osw-navigation-view>\n\t\t\t\t<osw-table [tableStyle]=\"'default'\">\n\t\t\t\t\t<osw-table-list>\n\t\t\t\t\t\t<template osw-table-list-content>\n\t\t\t\t\t\t\t<osw-table-cell *ngFor=\"let cell of cells\" [cell]=\"cell\">\n\t\t\t\t\t\t\t\t{{cell.content}}\n\t\t\t\t\t\t\t</osw-table-cell>\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</osw-table-list>\n\t\t\t\t</osw-table>\n\t\t\t</template>\n\t\t<osw-navigation>\n\t",
                        directives: [
                            navigation_1.OSW_NAVIGATION_DIRECTIVES,
                            table_1.OSW_TABLE_DIRECTIVES,
                            cell_component_1.CellComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EpiHomeComponent);
                return EpiHomeComponent;
            }());
            exports_1("EpiHomeComponent", EpiHomeComponent);
        }
    }
});
//# sourceMappingURL=epi.home.component.js.map