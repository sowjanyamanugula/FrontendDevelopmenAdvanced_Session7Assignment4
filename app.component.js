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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Session 7 Assignment 4";
        this.userList = [
            { name: "Avnesh Shakya", age: "26", role: "Admin" },
            { name: "Adam", age: "30", role: "Member" },
            { name: "Eve", age: "35", role: "SuperAdmin" },
            { name: "Mohan", age: "25", role: "Member" },
            { name: "Sohan", age: "28", role: "Superwiser" },
        ];
        this.MatchedArr = [];
    }
    AppComponent.prototype.ngClick = function (user) {
        this.MatchedArr = [];
        for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
            var arr = _a[_i];
            if (user.role == arr.role) {
                console.log(user.name);
                this.MatchedArr.push(user.name);
            }
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " <div>\n               <h1>{{pageTitle}}</h1>\n               <ul *ngFor=\"let user of userList\">\n                  <li (click)=\"ngClick(user)\">{{user.name}} {{user.role}}</li>\n                </ul>\n                <hr/>\n                <h2>List of users</h2>\n               <ul *ngFor=\"let user1 of this.MatchedArr\">\n                  <li>{{user1.name}}</li>\n                </ul> \n               \n    </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map