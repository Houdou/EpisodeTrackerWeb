System.register(['@angular/core', '@osw/table/cell.component'], function(exports_1, context_1) {
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
    var core_1, cell_component_1;
    var BangumiCellComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cell_component_1_1) {
                cell_component_1 = cell_component_1_1;
            }],
        execute: function() {
            BangumiCellComponent = (function () {
                function BangumiCellComponent() {
                    this.selected = new core_1.EventEmitter();
                    this.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0
                    };
                }
                BangumiCellComponent.prototype.onSelect = function (event) {
                    this.touches.startX = event.targetTouches[0].pageX;
                    this.touches.startY = event.targetTouches[0].pageY;
                    this.scrolling = false;
                    this.isMoved = false;
                };
                BangumiCellComponent.prototype.onMove = function (event) {
                    this.touches.currentX = event.targetTouches[0].pageX;
                    this.touches.currentY = event.targetTouches[0].pageY;
                    var touchAngle = Math.atan2(Math.abs(this.touches.currentY - this.touches.startY), Math.abs(this.touches.currentX - this.touches.startX)) * 180 / Math.PI;
                    var moveDistance = Math.hypot(this.touches.currentY - this.touches.startY, this.touches.currentX - this.touches.startX);
                    this.scrolling = touchAngle < 45;
                    this.isMoved = this.isMoved || moveDistance > 10;
                };
                BangumiCellComponent.prototype.onMoveEnd = function (event) {
                    if (this.scrolling || this.isMoved) {
                        return;
                    }
                    this.selected.emit(this.cell);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', cell_component_1.Cell)
                ], BangumiCellComponent.prototype, "cell", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BangumiCellComponent.prototype, "selected", void 0);
                BangumiCellComponent = __decorate([
                    core_1.Component({
                        selector: 'epi-settings-bangumi-cell',
                        template: "\n\t\t<div class=\"epi-list-bangumi-cell-wrapper\"\n\t\t\t(touchstart)=\"onSelect($event)\"\n\t\t\t(touchmove)=\"onMove($event)\"\n\t\t\t(touchend)=\"onMoveEnd($event)\">\n\t\t\t<div class=\"epi-list-bangumi-cell-title\">\n\t\t\t\t{{cell.content}}\n\t\t\t</div>\n\t\t</div>\n\t",
                        styles: ["\n\t\t:host {\n\t\t\tdisplay: -webkit-flex;\n\t\t\tdisplay: flex;\n\t\t\theight: 48px;\n\t\t\twidth: 100%;\n\n\t\t\talign-items: center;\n\t\t}\n\t\t.epi-list-bangumi-cell-wrapper:after {\n\t\t\tposition: absolute;\n\t\t\tleft: 16px;\n\t\t\tright: 0;\n\t\t\tcontent: '';\n\t\t\theight: 47px;\n\t\t\twidth: auto;\n\t\t\tborder-bottom: solid 1px #C8C7CC;\n\n\t\t\t-webkit-transform-origin: left bottom;\n\t\t\ttransform-origin: left bottom;\n\t\t}\n\t\t/* Retina */\n\t\t@media only screen and (-webkit-min-device-pixel-ratio: 2.0),\n\t\tonly screen and (min-device-pixel-ratio: 2.0) {\n\t\t    .epi-list-bangumi-cell-wrapper:after {\n\t\t        -webkit-transform: scaleY(0.5);\n\t\t        transform: scaleY(0.5);\n\t\t    }\n\t\t}\n\t\t.epi-list-bangumi-cell-wrapper {\n\t\t\tdisplay: -webkit-flex;\n\t\t\tdisplay: flex;\n\t\t\theight: 48px;\n\t\t\twidth: 100%;\n\n\t\t\talign-items: center;\n\t\t\tbackground-color: #FFFFFF;\n\t\t}\n\t\t.epi-list-bangumi-cell-title {\n\t\t\tmargin-left: 16px;\n\t\t\tfont-size: 18px;\n\t\t}\n\t"],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], BangumiCellComponent);
                return BangumiCellComponent;
            }());
            exports_1("BangumiCellComponent", BangumiCellComponent);
        }
    }
});
//# sourceMappingURL=bangumi.cell.component.js.map