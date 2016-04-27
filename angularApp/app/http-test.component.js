"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_test_service_1 = require("./http-test.service");
var HTTPTestComponent = (function () {
    function HTTPTestComponent(_httpService) {
        this._httpService = _httpService;
    }
    HTTPTestComponent.prototype.onTestGet = function () {
        var _this = this;
        this._httpService.getCurrentTime()
            .subscribe(function (data) {
            _this.getData = JSON.stringify(data);
        }, function (error) { return alert(error); }, function () { return console.log('finished'); });
    };
    HTTPTestComponent = __decorate([
        core_1.Component({
            selector: 'http-test',
            template: "\n        <button (click)=\"onTestGet()\">Test Get Request</button> <br>\n        <p>Output: {{getData}}</p>\n        <button>Test POST Request</button> <br>\n        <p>Output: {{postData}}</p>\n    ",
            providers: [http_test_service_1.HTTPTestService]
        }), 
        __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
    ], HTTPTestComponent);
    return HTTPTestComponent;
}());
exports.HTTPTestComponent = HTTPTestComponent;
//# sourceMappingURL=http-test.component.js.map