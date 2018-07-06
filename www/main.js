(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/pug-loader/index.js!./src/app/groups/groups.component.pug":
/*!***********************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/groups/groups.component.pug ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cmat-toolbar class=\"scrollable\" color=\"primary\" *ngIf=\"groupNames.length &gt; 0\"\u003E\u003Cmat-card *ngFor=\"let groupName of groupNames\"\u003E \u003Cmat-card-content\u003E \u003Cspan\u003E{{groupName}}\u003C\u002Fspan\u003E\u003Cbutton mat-button *ngIf=\"!dataService.isInAddMode||(groupName!=dataService.groupToAddTo)\" (click)=\"b1Click(groupName)\"\u003E{{isManageMode?\"manage\":\"on\"}}\u003C\u002Fbutton\u003E\u003Cbutton mat-raised-button color=\"accent\" *ngIf=\"dataService.isInAddMode&amp;&amp;(groupName==dataService.groupToAddTo)\" (click)=\"b1Click(groupName)\"\u003Emanage\u003C\u002Fbutton\u003E\u003Cbutton mat-button (click)=\"b2Click(groupName)\"\u003E{{isManageMode?\"remove\":\"off\"}}\u003C\u002Fbutton\u003E\u003C\u002Fmat-card-content\u003E\u003C\u002Fmat-card\u003E\u003C\u002Fmat-toolbar\u003E\u003Cmat-accordion\u003E\u003Cmat-expansion-panel (opened)=\"isManageMode = true\" (closed)=\"isManageMode = false; dataService.isInAddMode = false\"\u003E\u003Cmat-expansion-panel-header\u003E\u003Cmat-panel-title\u003EMange Groups\u003C\u002Fmat-panel-title\u003E\u003C\u002Fmat-expansion-panel-header\u003E\u003Cform (submit)=\"createGroup($event)\"\u003ECreate Group:\u003Cmat-form-field appearance=\"fill\" formControlName=\"groupName\" color=\"accent\"\u003E\u003Cinput matInput placeholder=\"Group Name\" name=\"groupName\"\u003E\u003C\u002Fmat-form-field\u003E\u003Cbutton mat-button color=\"accent\" type=\"submit\"\u003ECreate\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003Cbutton mat-button (click)=\"loadGroups()\"\u003ELoad Groups\u003C\u002Fbutton\u003E\u003Cbutton mat-button (click)=\"saveGroups()\"\u003ESave Groups\u003C\u002Fbutton\u003E\u003Cbutton mat-button (click)=\"exportGroups()\"\u003EExport Groups\u003C\u002Fbutton\u003E\u003Clabel\u003EImport Groups:\u003C\u002Flabel\u003E\u003Cinput type=\"file\" (change)=\"importGroups($event.target.files[0])\"\u003E\u003C\u002Fmat-expansion-panel\u003E\u003Cng-content *ngIf=\"!dataService.isInAddMode\"\u003E\u003C\u002Fng-content\u003E\u003C\u002Fmat-accordion\u003E\u003Cmat-selection-list *ngIf=\"dataService.isInAddMode\" #creators (selectionChange)=\"addCreatorToGroup($event)\"\u003E\u003Cmat-list-option *ngFor=\"let creator of sortByTitle(dataService.allCreators)\" checkboxPosition=\"before\" [selected]=\"isCreatorInGroup(creator.title)\"\u003E\u003Cspan matLine style=\"margin-left:45px;line-height:25px;position: relative;top: 20px;\"\u003E{{creator.title}}\u003C\u002Fspan\u003E\u003Cspan matLine style=\"margin-left:45px;line-height:15px;position: relative;top: 20px;\"\u003E{{creator.stats.subscriberCount}}\u003C\u002Fspan\u003E\u003Cimg matListAvatar style=\"position: relative;top: -20px;\" [src]=\"creator.thumbnails.medium.url\"\u003E\u003C\u002Fmat-list-option\u003E\u003C\u002Fmat-selection-list\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/main-nav/main-nav.component.pug":
/*!***************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/main-nav/main-nav.component.pug ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cmat-sidenav-container class=\"sidenav-container\"\u003E\u003Cmat-sidenav *ngIf=\"!dataService.isInAddMode\" fixedInViewport=\"true\" [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"!(isHandset$ | async) || isDrawerOpen\"\u003E\u003Capp-side-bar\u003E\u003C\u002Fapp-side-bar\u003E\u003C\u002Fmat-sidenav\u003E\u003Cmat-sidenav-content\u003E\u003Cmat-toolbar color=\"primary\"\u003E\u003Cbutton type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"isDrawerOpen = !isDrawerOpen\" *ngIf=\"isHandset$ | async\"\u003E\u003Cmat-icon aria-label=\"Side nav toggle icon\"\u003Emenu\u003C\u002Fmat-icon\u003E\u003C\u002Fbutton\u003E\u003Cspan\u003EBetter YouTube Subscription Feed\u003C\u002Fspan\u003E\u003C\u002Fmat-toolbar\u003E\u003Capp-groups\u003E\u003Capp-top-bar\u003E\u003C\u002Fapp-top-bar\u003E\u003C\u002Fapp-groups\u003E\u003Cmat-nav-list *ngIf=\"!dataService.isInAddMode\"\u003E\u003Cdiv *ngFor=\"let listing of dataService.listings\"\u003E\u003Ca *ngIf=\"isListingActive(listing)\" mat-list-item [href]=\"&quot;https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=&quot;+listing.video.id\" target=\"_blank\"\u003E {{listing.video.publishedAt.split(\"T\")[0]}} --- {{listing.video.title}} --- {{listing.creator.title}}\u003C\u002Fa\u003E\u003Cmat-divider *ngIf=\"isListingActive(listing)\"\u003E\u003C\u002Fmat-divider\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmat-nav-list\u003E\u003C\u002Fmat-sidenav-content\u003E\u003C\u002Fmat-sidenav-container\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/side-bar/side-bar.component.pug":
/*!***************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/side-bar/side-bar.component.pug ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cbutton mat-button (click)=\"creators.selectAll(); allOn()\"\u003ESelect All\u003C\u002Fbutton\u003E\u003Cbutton mat-button (click)=\"creators.deselectAll(); allOff()\"\u003EDeselect All\u003C\u002Fbutton\u003E\u003Cmat-selection-list #creators (selectionChange)=\"setActive($event)\" [compareWith]=\"log\"\u003E\u003Cmat-list-option *ngFor=\"let creator of dataService.creators\" [value]=\"creator.title\" [selected]=\"true\"\u003E\u003Cspan matLine style=\"margin-left:45px;line-height:25px;position: relative;top: 20px;\"\u003E{{creator.title}}\u003C\u002Fspan\u003E\u003Cspan matLine style=\"margin-left:45px;line-height:15px;position: relative;top: 20px;\"\u003E{{creator.stats.subscriberCount}}\u003C\u002Fspan\u003E\u003Cimg matListAvatar style=\"position: relative;top: -20px;\" [src]=\"creator.thumbnails.medium.url\"\u003E\u003C\u002Fmat-list-option\u003E\u003C\u002Fmat-selection-list\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/top-bar/top-bar.component.pug":
/*!*************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/top-bar/top-bar.component.pug ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cmat-expansion-panel\u003E\u003Cmat-expansion-panel-header\u003EChange Search Config\u003C\u002Fmat-expansion-panel-header\u003E\u003Cform (submit)=\"onSubmit($event)\"\u003E\u003Cmat-form-field appearance=\"fill\" formControlName=\"startDate\" color=\"accent\"\u003E\u003Cmat-label\u003EStart Date\u003C\u002Fmat-label\u003E\u003Cinput matInput [matDatepicker]=\"startDate\" placeholder=\"Start Date\" name=\"startDate\"\u003E\u003Cmat-datepicker-toggle matSuffix [for]=\"startDate\"\u003E\u003C\u002Fmat-datepicker-toggle\u003E\u003Cmat-datepicker #startDate\u003E\u003C\u002Fmat-datepicker\u003E\u003C\u002Fmat-form-field\u003E\u003Cbr\u003E\u003Cmat-form-field appearance=\"fill\" formControlName=\"today\" color=\"accent\"\u003E\u003Cmat-label\u003EEnd Date\u003C\u002Fmat-label\u003E\u003Cinput matInput [matDatepicker]=\"endDate\" placeholder=\"End Date\" name=\"today\"\u003E\u003Cmat-datepicker-toggle matSuffix [for]=\"endDate\"\u003E\u003C\u002Fmat-datepicker-toggle\u003E\u003Cmat-datepicker #endDate\u003E\u003C\u002Fmat-datepicker\u003E\u003C\u002Fmat-form-field\u003E\u003Cbr\u003E\u003Cmat-form-field appearance=\"fill\" formControlName=\"channelId\" color=\"accent\"\u003E\u003Cmat-label\u003EChannel ID\u003C\u002Fmat-label\u003E\u003Cinput matInput placeholder=\"Channel ID\" name=\"channelId\" [value]=\"dataService.channelId\"\u003E\u003Cspan matSuffix\u003E\u003Ca mat-icon-button href=\"https:\u002F\u002Fsupport.google.com\u002Fyoutube\u002Fanswer\u002F3250431?hl=en\" target=\"_blank\"\u003E\u003Cmat-icon aria-label=\"How to get your channel ID\"\u003Ehelp\u003C\u002Fmat-icon\u003E\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003C\u002Fmat-form-field\u003E\u003Cbr\u003E\u003Cbutton mat-raised-button color=\"accent\" type=\"submit\"\u003EGo\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fmat-expansion-panel\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_persistence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-persistence */ "./node_modules/angular-persistence/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__["MainNavComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_8__["GroupsComponent"],
                _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                angular_persistence__WEBPACK_IMPORTED_MODULE_2__["PersistenceModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]
            ],
            providers: [],
            bootstrap: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__["MainNavComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var DataService = /** @class */ (function () {
    function DataService() {
        this.listings = [];
        this.creators = [];
        this.groups = {};
        this.channelId = 'UCRWa5qX5vw23r_R2j1yixbA';
        var now = new Date();
        this.isInAddMode = false;
        this.today = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
        now.setDate(now.getDate() - 3);
        this.startDate = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
        this.buildListings();
    }
    Object.defineProperty(DataService.prototype, "allCreators", {
        get: function () {
            return subs;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.buildListings = function () {
        var _this = this;
        this.listings = [];
        this.creators = [];
        var self = this;
        getAllVideosBetween(this.startDate, this.today, this.channelId, function (video, creator) {
            creator.isActive = true;
            self.listings.push({ video: video, creator: creator });
            _this.listings.sort(function (a, b) {
                return -1 * _this.dateCompare(a.video.publishedAt, b.video.publishedAt);
            });
            var isDuplicateCreator = false;
            for (var _i = 0, _a = self.creators; _i < _a.length; _i++) {
                var possibleDuplicate = _a[_i];
                if (possibleDuplicate.title == creator.title)
                    isDuplicateCreator = true;
            }
            if (!isDuplicateCreator)
                self.creators.push(creator);
            self.sortCreators();
        });
    };
    DataService.prototype.sortCreators = function () {
        this.creators.sort(function (a, b) {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    };
    DataService.prototype.setListings = function (listings) {
        for (var date in listings) {
            this.listings.push({
                date: date, "listings": listings[date]
            });
        }
    };
    DataService.prototype.dateCompare = function (date, otherdate) {
        date = date.split("T")[0].split("-");
        otherdate = otherdate.split("T")[0].split("-");
        function compareSection(i) {
            return Number(date[i]) - Number(otherdate[i]);
        }
        var result = compareSection(0);
        if (result == 0) {
            result = compareSection(1);
            if (result == 0) {
                result = compareSection(2);
            }
        }
        return result;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/groups/groups.component.css":
/*!*********************************************!*\
  !*** ./src/app/groups/groups.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* This Source Code Form is subject to the terms of the Mozilla Public\r\n * License, v. 2.0. If a copy of the MPL was not distributed with this\r\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\r\nmat-card{\r\n    padding: 5px;\r\n    margin-right: 5px;\r\n}\r\nspan{\r\n    padding: 5px;\r\n}\r\n.manageGroupSection{\r\n    display: inline-block;\r\n    width: auto;\r\n    height: auto;\r\n}\r\n.block{\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/groups/groups.component.pug":
/*!*********************************************!*\
  !*** ./src/app/groups/groups.component.pug ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/groups/groups.component.pug */ "./node_modules/pug-loader/index.js!./src/app/groups/groups.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_persistence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-persistence */ "./node_modules/angular-persistence/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(dataService, persistenceService) {
        this.dataService = dataService;
        this.persistenceService = persistenceService;
        this.isManageMode = false;
    }
    GroupsComponent.prototype.createGroup = function (event) {
        var groupName = event.target.elements.groupName.value;
        this.dataService.groups[groupName] = [];
        return false;
    };
    GroupsComponent.prototype.addCreatorToGroup = function (e) {
        var creatorTitle = e.option.getLabel();
        var isAlreadyInGroup = !e.option.selected;
        if (isAlreadyInGroup) {
            var i = this.dataService.groups[this.dataService.groupToAddTo].indexOf(creatorTitle);
            this.dataService.groups[this.dataService.groupToAddTo].splice(i, 1);
        }
        else {
            this.dataService.groups[this.dataService.groupToAddTo].push(creatorTitle);
        }
        console.log(this.dataService.groups[this.dataService.groupToAddTo]);
    };
    GroupsComponent.prototype.isCreatorInGroup = function (creatorTitle) {
        for (var _i = 0, _a = this.dataService.groups[this.dataService.groupToAddTo]; _i < _a.length; _i++) {
            var creator = _a[_i];
            if (creator.title == creatorTitle)
                return true;
        }
        return false;
    };
    GroupsComponent.prototype.sortByTitle = function (array) {
        return array.sort(function (a, b) {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    };
    GroupsComponent.prototype.saveGroups = function () {
        this.persistenceService.set("groups", this.dataService.groups, { type: angular_persistence__WEBPACK_IMPORTED_MODULE_1__["StorageType"].LOCAL });
    };
    GroupsComponent.prototype.loadGroups = function () {
        this.dataService.groups = this.persistenceService.get('groups', angular_persistence__WEBPACK_IMPORTED_MODULE_1__["StorageType"].LOCAL);
        this.removeEmptyGroup();
    };
    GroupsComponent.prototype.exportGroups = function () {
        var downloadLink = document.createElement('a');
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.dataService.groups)));
        downloadLink.setAttribute('download', "exportedGroups.txt");
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    GroupsComponent.prototype.importGroups = function (file) {
        var loader = new FileReader();
        var self = this;
        loader.onload = function (event) {
            self.dataService.groups = JSON.parse(loader.result);
        };
        loader.readAsText(file);
        this.removeEmptyGroup();
    };
    GroupsComponent.prototype.removeEmptyGroup = function () {
        delete this.dataService.groups[""];
        delete this.dataService.groups[" "];
    };
    GroupsComponent.prototype.removeGroup = function (groupName) {
        delete this.dataService.groups[groupName];
    };
    GroupsComponent.prototype.setGroupTo = function (groupName, isOn) {
        var _this = this;
        this.dataService.groups[groupName].map(function (creatorTitle) {
            _this.dataService.creators.map(function (creator) {
                if (creator.title == creatorTitle)
                    creator.isActive = isOn;
            });
        });
    };
    GroupsComponent.prototype.switchToAddMode = function (groupName) {
        this.dataService.isInAddMode = true;
        this.dataService.groupToAddTo = groupName;
    };
    Object.defineProperty(GroupsComponent.prototype, "groupNames", {
        get: function () {
            var groupNames = [];
            for (var groupName in this.dataService.groups) {
                groupNames.push(groupName);
            }
            return groupNames;
        },
        enumerable: true,
        configurable: true
    });
    GroupsComponent.prototype.b1Click = function (groupName) {
        if (this.isManageMode)
            this.switchToAddMode(groupName);
        else
            this.setGroupTo(groupName, true);
    };
    GroupsComponent.prototype.b2Click = function (groupName) {
        if (this.isManageMode)
            this.removeGroup(groupName);
        else
            this.setGroupTo(groupName, false);
    };
    GroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.component.pug */ "./src/app/groups/groups.component.pug"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], angular_persistence__WEBPACK_IMPORTED_MODULE_1__["PersistenceService"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n.mat-sidenav {\r\n  width: 15em;\r\n}\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.pug":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.pug ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/main-nav/main-nav.component.pug */ "./node_modules/pug-loader/index.js!./src/app/main-nav/main-nav.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, dataService) {
        this.breakpointObserver = breakpointObserver;
        this.dataService = dataService;
        this.isDrawerOpen = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent.prototype.ngOnInit = function () {
        document.addEventListener("deviceready", function () {
            alert(device.platform);
        }, false);
    };
    MainNavComponent.prototype.isListingActive = function (listing) {
        var creator;
        for (var _i = 0, _a = this.dataService.creators; _i < _a.length; _i++) {
            creator = _a[_i];
            if (listing.creator.title == creator.title)
                break;
        }
        return creator.isActive;
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-nav',
            template: __webpack_require__(/*! ./main-nav.component.pug */ "./src/app/main-nav/main-nav.component.pug"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* This Source Code Form is subject to the terms of the Mozilla Public\r\n * License, v. 2.0. If a copy of the MPL was not distributed with this\r\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\r\nbutton{\r\n    width: 50%;\r\n}"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.pug":
/*!*************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.pug ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/side-bar/side-bar.component.pug */ "./node_modules/pug-loader/index.js!./src/app/side-bar/side-bar.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(dataService) {
        this.dataService = dataService;
    }
    // setActive(i, isActive){
    //   if(!this.dataService.isInAddMode){
    //   }else{
    //     if(!isActive){
    //       let groupI = 0;
    //       for(let creatorTitle of this.dataService.groups[this.dataService.groupToAddTo]){
    //         if(creatorTitle == this.dataService.creators[i].title){
    //           this.dataService.groups[this.dataService.groupToAddTo].splice(groupI, 1);
    //           return;
    //         }
    //         groupI++;
    //       }
    //       throw("something didn't work right");
    //     }else this.dataService.groups[this.dataService.groupToAddTo].push(this.dataService.creators[i].title);
    //   }
    // }
    SideBarComponent.prototype.getIsActive = function (creator) {
        if (this.dataService.isInAddMode && this.getIsInGroup(creator, this.dataService.groupToAddTo)) {
            return true;
        }
        else if (!this.dataService.isInAddMode && creator.isActive) {
            return true;
        }
        else {
            return false;
        }
    };
    SideBarComponent.prototype.getIsInGroup = function (creator, group) {
        for (var _i = 0, _a = this.dataService.groups[group]; _i < _a.length; _i++) {
            var creatorTitle = _a[_i];
            if (creatorTitle == creator.title)
                return true;
        }
        return false;
    };
    SideBarComponent.prototype.allOn = function () {
        for (var i in this.dataService.creators) {
            this.dataService.creators[i].isActive = true;
        }
    };
    SideBarComponent.prototype.allOff = function () {
        for (var i in this.dataService.creators) {
            this.dataService.creators[i].isActive = false;
        }
    };
    SideBarComponent.prototype.setActive = function (e) {
        var optionToChange = e.option.value;
        var isSetTo = e.option.selected;
        var i = 0;
        for (var _i = 0, _a = this.dataService.creators; _i < _a.length; _i++) {
            var creator = _a[_i];
            if (creator.title == optionToChange)
                break;
            else
                i++;
        }
        this.dataService.creators[i].isActive = isSetTo;
    };
    SideBarComponent.prototype.log = function (o1, o2) {
        console.log(o1);
        console.log(o2);
        return true;
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.pug */ "./src/app/side-bar/side-bar.component.pug"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/top-bar/top-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    display: inline-block;\r\n    padding-right: 0.5cm;\r\n}\r\ninput{\r\n    vertical-align: top;\r\n}\r\nform{\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.pug":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.pug ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/top-bar/top-bar.component.pug */ "./node_modules/pug-loader/index.js!./src/app/top-bar/top-bar.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(dataService) {
        this.dataService = dataService;
    }
    TopBarComponent.prototype.onSubmit = function (event) {
        this.dataService.startDate = this.convertDateFormat(event.target.elements.startDate.value);
        this.dataService.today = this.convertDateFormat(event.target.elements.today.value);
        this.dataService.channelId = event.target.elements.channelId.value;
        this.dataService.buildListings();
        return false;
    };
    TopBarComponent.prototype.convertDateFormat = function (old) {
        var split = old.split('/');
        return split[2] + "-" + split[0] + '-' + split[1];
    };
    TopBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__(/*! ./top-bar.component.pug */ "./src/app/top-bar/top-bar.component.pug"),
            styles: [__webpack_require__(/*! ./top-bar.component.css */ "./src/app/top-bar/top-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cjackson\Documents\GitHub\BetterYouTubeSub\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map