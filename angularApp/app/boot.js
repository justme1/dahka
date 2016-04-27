// fix TypeScript errors ( https://github.com/angular/angular/issues/7280 )
/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
"use strict";
var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./app.component');
var http_1 = require("angular2/http");
browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=boot.js.map