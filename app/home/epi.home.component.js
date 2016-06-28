System.register(['@angular/core', '@osw/table/table', '@osw/table/cell.component'], function(exports_1, context_1) {
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
    var core_1, table_1, cell_component_1;
    var EpiHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    this.cells = [
                        new cell_component_1.Cell("table row 1"),
                        new cell_component_1.Cell("table row 2"),
                        new cell_component_1.Cell("table row 3")
                    ];
                }
                EpiHomeComponent = __decorate([
                    core_1.Component({
                        selector: 'epi-home',
                        template: "\n\t\t<osw-table [tableStyle]=\"'default'\">\n\t\t\t<osw-table-list>\n\t\t\t\t<template osw-table-list-content>\n\t\t\t\t\t<osw-table-cell *ngFor=\"let cell of cells\" [cell]=\"cell\">\n\t\t\t\t\t\t{{cell.content}}\n\t\t\t\t\t</osw-table-cell>\n\t\t\t\t</template>\n\t\t\t</osw-table-list>\n\t\t</osw-table>\n\t",
                        directives: [
                            table_1.TABLE_DIRECTIVES,
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