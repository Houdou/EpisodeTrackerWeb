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
    var EpiSettingsTableComponent;
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
            EpiSettingsTableComponent = (function () {
                function EpiSettingsTableComponent(router) {
                    this.router = router;
                    this.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0
                    };
                    this.scrolling = true;
                    this.cells = [
                        new table_1.Cell("Settings 0", ""),
                        new table_1.Cell("Settings 1", ""),
                        new table_1.Cell("Settings 2", ""),
                        new table_1.Cell("Settings 3", ""),
                    ];
                }
                EpiSettingsTableComponent.prototype.onTouchStart = function (event) {
                    this.touches.startX = event.targetTouches[0].pageX;
                    this.touches.startY = event.targetTouches[0].pageY;
                    this.scrolling = false;
                };
                EpiSettingsTableComponent.prototype.onTouchMove = function (event) {
                    this.touches.currentX = event.targetTouches[0].pageX;
                    this.touches.currentY = event.targetTouches[0].pageY;
                    var touchAngle = Math.atan2(Math.abs(this.touches.currentY - this.touches.startY), Math.abs(this.touches.currentX - this.touches.startX)) * 180 / Math.PI;
                    this.scrolling = touchAngle > 45;
                };
                EpiSettingsTableComponent.prototype.onSelected = function (cell) {
                    if (this.scrolling) {
                        return;
                    }
                    this.router.navigate(['/home', cell.path]);
                };
                EpiSettingsTableComponent = __decorate([
                    core_1.Component({
                        selector: 'epi-settings-table',
                        template: "\n\t\t<osw-table [tableStyle]=\"'default'\">\n\t\t\t<osw-table-list>\n\t\t\t\t<template osw-table-list-content>\n\t\t\t\t\t<epi-settings-bangumi-cell *ngFor=\"let cell of cells; let i = index\"\n\t\t\t\t\t\t[cell]=\"cell\"\n\t\t\t\t\t\t(touchstart)=\"onTouchStart($event, i)\"\n\t\t\t\t\t\t(touchmove)=\"onTouchMove($event, i)\"\n\t\t\t\t\t\t(selected)=\"onSelected($event)\">\n\t\t\t\t\t</epi-settings-bangumi-cell>\n\t\t\t\t</template>\n\t\t\t</osw-table-list>\n\t\t</osw-table>\n\t",
                        directives: [
                            table_1.OSW_TABLE_DIRECTIVES,
                            bangumi_cell_component_1.BangumiCellComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], EpiSettingsTableComponent);
                return EpiSettingsTableComponent;
            }());
            exports_1("EpiSettingsTableComponent", EpiSettingsTableComponent);
        }
    }
});
//# sourceMappingURL=table.component.js.map