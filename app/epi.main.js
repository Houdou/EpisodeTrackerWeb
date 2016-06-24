System.register(['@angular/core', '@angular/router', '@osw/tabs/tabs', '@osw/styles.ts'], function(exports_1, context_1) {
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
    var core_1, router_1, tabs_1, styles_ts_1;
    var EpiMain;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (styles_ts_1_1) {
                styles_ts_1 = styles_ts_1_1;
            }],
        execute: function() {
            EpiMain = (function () {
                function EpiMain() {
                    this.tabs = [
                        new tabs_1.Tab('flaticon-note', 'List', 'list'),
                        new tabs_1.Tab('flaticon-home', 'Home', 'home'),
                        new tabs_1.Tab('flaticon-settings', 'Settings', 'settings')
                    ];
                }
                EpiMain = __decorate([
                    core_1.Component({
                        selector: 'epitracker',
                        directives: [
                            tabs_1.OSW_TABS_DIRECTIVES,
                            router_1.ROUTER_DIRECTIVES
                        ],
                        template: "\n\t\t<osw-tabbar [tabs]=\"tabs\"></osw-tabbar>\n\t",
                        styles: [
                            styles_ts_1.OSW_STYLES
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EpiMain);
                return EpiMain;
            }());
            exports_1("EpiMain", EpiMain);
            ;
        }
    }
});
//# sourceMappingURL=epi.main.js.map