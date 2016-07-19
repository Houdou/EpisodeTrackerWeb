System.register(['@angular/core', '@angular/router', '@osw/table/table', './bangumi.cell.component'], function(exports_1, context_1) {
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
    var core_1, router_1, table_1, bangumi_cell_component_1;
    var EpiHomeTableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (table_1_1) {
                table_1 = table_1_1;
            },
            function (bangumi_cell_component_1_1) {
                bangumi_cell_component_1 = bangumi_cell_component_1_1;
            }],
        execute: function() {
            EpiHomeTableComponent = (function () {
                function EpiHomeTableComponent(router) {
                    this.router = router;
                    this.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0
                    };
                    this.scrolling = true;
                    this.cells = [
                        new table_1.Cell("Table row 0", "0", { id: "0" }),
                        new table_1.Cell("Table row 1", "1", { id: "1" }),
                        new table_1.Cell("Table row 2", "2", { id: "2" }),
                        new table_1.Cell("Table row 3", "3", { id: "3" }),
                        new table_1.Cell("Table row 4", "4", { id: "4" }),
                        new table_1.Cell("Table row 5", "5", { id: "5" }),
                        new table_1.Cell("Table row 6", "6", { id: "6" }),
                        new table_1.Cell("Table row 7", "7", { id: "7" }),
                        new table_1.Cell("Table row 8", "8", { id: "8" }),
                        new table_1.Cell("Table row 9", "9", { id: "9" }),
                        new table_1.Cell("Table row 10", "10", { id: "10" }),
                        new table_1.Cell("Table row 11", "11", { id: "11" }),
                        new table_1.Cell("Table row 12", "12", { id: "12" }),
                        new table_1.Cell("Table row 13", "13", { id: "13" }),
                        new table_1.Cell("Table row 14", "14", { id: "14" }),
                        new table_1.Cell("Table row 15", "15", { id: "15" }),
                        new table_1.Cell("Table row 16", "16", { id: "16" }),
                        new table_1.Cell("Table row 17", "17", { id: "17" }),
                    ];
                }
                EpiHomeTableComponent.prototype.onTouchStart = function (event) {
                    this.touches.startX = event.targetTouches[0].pageX;
                    this.touches.startY = event.targetTouches[0].pageY;
                    this.scrolling = false;
                };
                EpiHomeTableComponent.prototype.onTouchMove = function (event) {
                    this.touches.currentX = event.targetTouches[0].pageX;
                    this.touches.currentY = event.targetTouches[0].pageY;
                    var touchAngle = Math.atan2(Math.abs(this.touches.currentY - this.touches.startY), Math.abs(this.touches.currentX - this.touches.startX)) * 180 / Math.PI;
                    this.scrolling = touchAngle > 45;
                };
                EpiHomeTableComponent.prototype.onSelected = function (cell) {
                    if (this.scrolling) {
                        return;
                    }
                    this.router.navigate(['/home', cell.path]);
                };
                EpiHomeTableComponent = __decorate([
                    core_1.Component({
                        selector: 'epi-home-table',
                        template: "\n\t\t<osw-table [tableStyle]=\"'default'\">\n\t\t\t<osw-table-list>\n\t\t\t\t<template osw-table-list-content>\n\t\t\t\t\t<epi-home-bangumi-cell *ngFor=\"let cell of cells; let i = index\"\n\t\t\t\t\t\t[cell]=\"cell\"\n\t\t\t\t\t\t(touchstart)=\"onTouchStart($event, i)\"\n\t\t\t\t\t\t(touchmove)=\"onTouchMove($event, i)\"\n\t\t\t\t\t\t(selected)=\"onSelected($event)\">\n\t\t\t\t\t</epi-home-bangumi-cell>\n\t\t\t\t</template>\n\t\t\t</osw-table-list>\n\t\t</osw-table>\n\t",
                        directives: [
                            table_1.OSW_TABLE_DIRECTIVES,
                            bangumi_cell_component_1.BangumiCellComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], EpiHomeTableComponent);
                return EpiHomeTableComponent;
            }());
            exports_1("EpiHomeTableComponent", EpiHomeTableComponent);
        }
    }
});
//# sourceMappingURL=table.component.js.map