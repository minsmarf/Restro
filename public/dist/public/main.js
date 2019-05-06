(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resto_all_resto_all_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resto-all/resto-all.component */ "./src/app/resto-all/resto-all.component.ts");
/* harmony import */ var _resto_new_resto_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resto-new/resto-new.component */ "./src/app/resto-new/resto-new.component.ts");
/* harmony import */ var _resto_edit_resto_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resto-edit/resto-edit.component */ "./src/app/resto-edit/resto-edit.component.ts");
/* harmony import */ var _review_all_review_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review-all/review-all.component */ "./src/app/review-all/review-all.component.ts");
/* harmony import */ var _review_new_review_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-new/review-new.component */ "./src/app/review-new/review-new.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/restaurants' },
    { path: 'restaurants', component: _resto_all_resto_all_component__WEBPACK_IMPORTED_MODULE_2__["RestoAllComponent"], children: [
            { path: ':id/edit/', component: _resto_edit_resto_edit_component__WEBPACK_IMPORTED_MODULE_4__["RestoEditComponent"] },
        ] },
    { path: 'restaurants', component: _resto_all_resto_all_component__WEBPACK_IMPORTED_MODULE_2__["RestoAllComponent"] },
    { path: 'restaurants/:id/edit/', component: _resto_edit_resto_edit_component__WEBPACK_IMPORTED_MODULE_4__["RestoEditComponent"] },
    { path: 'restaurants/new', component: _resto_new_resto_new_component__WEBPACK_IMPORTED_MODULE_3__["RestoNewComponent"] },
    { path: 'restaurants/:id', component: _review_all_review_all_component__WEBPACK_IMPORTED_MODULE_5__["ReviewAllComponent"], children: [
            { path: 'review', component: _review_new_review_new_component__WEBPACK_IMPORTED_MODULE_6__["ReviewNewComponent"] },
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\r\n    height: 300px;\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <div class=\"row\">\n    <h4 class=\"display-4\"><small><a [routerLink]=\"['/restaurants']\" >Let's Eat</a></small></h4>\n  </div>\n</div>\n<!-- <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h4>google maps</h4>\n        <div class=\"form-group\">\n          <label for=\"place\">Search Google place</label>\n          <input class=\"form-control\" type=\"text\" id=\"place\" #search [formControl]=\"searchControl\" autocomplete=\"off\" autcapitalize=\"off\" spellcheck=\"off\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n          <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" [scrollwheel]=\"off\" style=\"height:300px\" >\n            <agm-marker *ngFor=\"let latlong of latlongs\" [latitude]=\"latlong.latitude\" [longitude]=\"latlong.longitude\">\n\n            </agm-marker>\n          </agm-map>\n        </div>\n    </div>\n</div> -->\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div id='map'></div>\n  \n    <INPUT type=\"text\" id=\"search\" style=\"width:85%\" placeholder=\"Enter place name\">\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    // @ViewChild('search')
    // public searchElementRef: ElementRef;
    // public zoom: number;
    // public latitude: number;
    // public longitude: number;
    // public latlongs: any = [];
    // public latlong: any = {};
    // public searchControl: FormControl;
    function AppComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.title = 'public';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.zoom = 8;
        // this.latitude = 37.335;
        // this.longitude = -121.89;
        // this.searchControl = new FormControl();
        // this.setCurrentPosition();
        // this.mapsAPILoader.load().then(() => {
        //   const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //     types: [],
        //     componentRestrictions: {'country': 'US'}
        //   });
        //   autocomplete.addListener('place_changed', () => {
        //     this.ngZone.run(() => {
        //       const place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //       if (place.geometry === undefined || place.geometry == null) {
        //         return;
        //       }
        //       const latlong = {
        //         latitude: place.geometry.location.lat(),
        //         longitude: place.geometry.location.lng(),
        //       };
        //       this.latlongs.push(latlong);
        //       this.searchControl.reset();
        //     });
        //   });
        // });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resto_all_resto_all_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resto-all/resto-all.component */ "./src/app/resto-all/resto-all.component.ts");
/* harmony import */ var _resto_edit_resto_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resto-edit/resto-edit.component */ "./src/app/resto-edit/resto-edit.component.ts");
/* harmony import */ var _resto_new_resto_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resto-new/resto-new.component */ "./src/app/resto-new/resto-new.component.ts");
/* harmony import */ var _review_all_review_all_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./review-all/review-all.component */ "./src/app/review-all/review-all.component.ts");
/* harmony import */ var _review_new_review_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./review-new/review-new.component */ "./src/app/review-new/review-new.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { RestoDeleteComponent } from './resto-delete/resto-delete.component';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _resto_all_resto_all_component__WEBPACK_IMPORTED_MODULE_10__["RestoAllComponent"],
                _resto_edit_resto_edit_component__WEBPACK_IMPORTED_MODULE_11__["RestoEditComponent"],
                _resto_new_resto_new_component__WEBPACK_IMPORTED_MODULE_12__["RestoNewComponent"],
                _review_all_review_all_component__WEBPACK_IMPORTED_MODULE_13__["ReviewAllComponent"],
                _review_new_review_new_component__WEBPACK_IMPORTED_MODULE_14__["ReviewNewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDnLnFq6_t_oEUf8orfUqbo7vaGgDuEl0Y',
                    libraries: ['places']
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllRestaurants = function () {
        return this._http.get('/api/restaurants/all');
    };
    HttpService.prototype.getRestaurantById = function (id) {
        return this._http.get('/api/restaurants/' + id);
    };
    HttpService.prototype.createRestaurant = function (restaurant) {
        console.log(restaurant);
        return this._http.post('/api/restaurants/new', restaurant);
    };
    HttpService.prototype.updateRestaurantById = function (id, restaurant) {
        return this._http.put('/api/restaurants/update/' + id, restaurant);
    };
    HttpService.prototype.nukeRestaurantById = function (restaurantId) {
        return this._http.delete('/api/restaurants/delete/' + restaurantId);
    };
    HttpService.prototype.updateRestaurantRateById = function (id, avgRating, restaurant) {
        console.log(id + ' ' + avgRating);
        return this._http.put('/api/restaurants/updaterate/' + id + '/' + avgRating, restaurant);
    };
    HttpService.prototype.getAllReviews = function () {
        return this._http.get('/api/reviews/all');
    };
    HttpService.prototype.getReviewByResto = function (restaurantId) {
        return this._http.get('/api/reviews/' + restaurantId);
    };
    HttpService.prototype.createReview = function (restaurantId, restaurant) {
        return this._http.post('/api/reviews/new/' + restaurantId, restaurant);
    };
    HttpService.prototype.updateReviewById = function (restaurantId, reviewId, restaurant) {
        return this._http.put('/api/reviews/update/' + restaurantId + '/' + reviewId, restaurant);
    };
    HttpService.prototype.nukeReviewById = function (restaurantId, reviewId) {
        return this._http.delete('/api/reviews/delete/' + restaurantId + '/' + reviewId);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/resto-all/resto-all.component.css":
/*!***************************************************!*\
  !*** ./src/app/resto-all/resto-all.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RvLWFsbC9yZXN0by1hbGwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/resto-all/resto-all.component.html":
/*!****************************************************!*\
  !*** ./src/app/resto-all/resto-all.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  \n  <!-- <div class=\"col-md-12\">\n    <h2 class=\"display-4 display-5 mt-5 mb-4\">Let's eat:</h2>\n  </div> -->\n  <!-- <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label for=\"place\">Search Google place</label>\n            <input class=\"form-control\" type=\"text\" id=\"place\" #search [formControl]=\"searchControl\" autocomplete=\"off\" autcapitalize=\"off\"  spellcheck=\"off\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" [scrollwheel]=\"off\" style=\"height:300px\" >\n              <agm-marker *ngFor=\"let latlong of latlongs\" [latitude]=\"latlong.latitude\" [longitude]=\"latlong.longitude\">\n  \n              </agm-marker>\n            </agm-map>\n          </div>\n      </div>\n  </div> -->\n  \n  <div class=\"row\">\n      <div class=\"col-md-6\">\n        \n        <a class=\"btn btn-primary text-white mt-3\" [routerLink]=\"['/restaurants/new']\">New Restaurant</a>\n      </div>\n    </div>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>IMG</th>\n        <th>User</th>\n        <th>Cuisine</th>\n        <th>Avg Rating</th>\n        <th>Actions Available</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of restos\">\n        <td><img src=\"{{item.img}}\" alt=\"{{item.name}}\" width=\"50px\"></td>\n        <td>{{item.name}}</td>\n        <td>{{item.cuisine}}</td>\n        <td>{{item.avgRating | number : '1.2'}}</td>\n        <td>\n          <a [routerLink]=\"['/restaurants', item._id]\" class=\"btn btn-primary mr-2\">Read Reviews</a>\n          <!-- <button (click)=\"toggleForm(item._id)\" [routerLink]=\"['edit']\" class=\"btn btn-warning mr-2\">Edit</button> -->\n          <button (click)=\"toggleForm(item._id)\" [routerLink]=\"[item._id, 'edit']\" class=\"btn btn-primary mr-2\">Edit</button>\n          <!-- <button *ngIf=\"item.delete\" (click)=\"nukeResto(item._id)\" class=\"btn btn-primary mr-2\">Delete</button> -->\n          <button (click)=\"nukeResto(item._id)\" class=\"btn btn-primary mr-2\">Delete</button>\n          <!-- <button (click)=\"toggleForm(item._id)\" [routerLink]=\"[item._id, 'delete']\" class=\"btn btn-primary mr-2\">Delete</button> -->\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<!-- <app-resto-edit *ngIf=\"isFormVisible\" [isFormVisible]=\"isFormVisible\" (anEventEmitter)=\"dataFromChild($event)\"></app-resto-edit> -->\n<app-resto-edit *ngIf=\"isFormVisible\" [isFormVisible]=\"isFormVisible\" [restoId]=\"restoId\" (anEventEmitter)=\"dataFromChild($event)\"></app-resto-edit>\n"

/***/ }),

/***/ "./src/app/resto-all/resto-all.component.ts":
/*!**************************************************!*\
  !*** ./src/app/resto-all/resto-all.component.ts ***!
  \**************************************************/
/*! exports provided: RestoAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoAllComponent", function() { return RestoAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestoAllComponent = /** @class */ (function () {
    function RestoAllComponent(_httpService, router, mapsAPILoader, ngZone) {
        this._httpService = _httpService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.latlongs = [];
        this.latlong = {};
    }
    RestoAllComponent.prototype.ngOnInit = function () {
        this.isFormVisible = false;
        this.getAllRestos();
        // // google maps
        // this.zoom = 8;
        // this.latitude = 37.335;
        // this.longitude = -121.89;
        // this.searchControl = new FormControl();
        // this.setCurrentPosition();
        // this.mapsAPILoader.load().then(() => {
        //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //     types: [],
        //     componentRestrictions: {'country': 'US'}
        //   });
        //   console.log(autocomplete);
        //   autocomplete.addListener('place_changed', () => {
        //     this.ngZone.run(() => {
        //       const place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //       if (place.geometry === undefined || place.geometry == null) {
        //         return;
        //       }
        //       const latlong = {
        //         latitude: place.geometry.location.lat(),
        //         longitude: place.geometry.location.lng(),
        //       };
        //       this.latlongs.push(latlong);
        //       // this.searchControl.reset();
        //     });
        //   });
        // });
    };
    RestoAllComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 8;
            });
        }
    };
    RestoAllComponent.prototype.getAllRestos = function () {
        var _this = this;
        var obs = this._httpService.getAllRestaurants();
        obs.subscribe(function (res) {
            console.log("Restaurants", res);
            _this.restos = res['data'];
            for (var i = 0; i < _this.restos.length; i++) {
                var current = _this.restos[i];
                var currentTime = new Date(current['createdAt']);
                var now = new Date(Date.now());
                // console.log( (now.getTime() - currentTime.getTime()) / 1000  );
                if ((now.getTime() - currentTime.getTime()) / 1000 < 30) {
                    console.log('true');
                    _this.restos[i];
                    // this.restos[i].delete = true;
                    console.log(_this.restos[i]);
                }
            }
            // console.log(this.restos);
        });
    };
    RestoAllComponent.prototype.toggleForm = function (id) {
        this.isFormVisible = !this.isFormVisible;
        this.restoId = id;
    };
    RestoAllComponent.prototype.dataFromChild = function (eventData) {
        this.isFormVisible = eventData;
        this.getAllRestos();
    };
    RestoAllComponent.prototype.nukeResto = function (id) {
        var _this = this;
        var obs = this._httpService.nukeRestaurantById(id);
        obs.subscribe(function (res) {
            console.log(res);
            _this.getAllRestos();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RestoAllComponent.prototype, "searchElementRef", void 0);
    RestoAllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resto-all',
            template: __webpack_require__(/*! ./resto-all.component.html */ "./src/app/resto-all/resto-all.component.html"),
            styles: [__webpack_require__(/*! ./resto-all.component.css */ "./src/app/resto-all/resto-all.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], RestoAllComponent);
    return RestoAllComponent;
}());



/***/ }),

/***/ "./src/app/resto-edit/resto-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/resto-edit/resto-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RvLWVkaXQvcmVzdG8tZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/resto-edit/resto-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/resto-edit/resto-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-5\">\n  <div class=\"row\">\n    <form (submit)=\"editRestoFromDb()\" class=\"col-md-6 offset-md-3\">\n      <h2 class=\"display-4 display-5 mt-5 mb-4\">Register a Restaurant:</h2>\n      <div class=\"form-group\">\n        <label>Restaurant Name</label>\n        <input \n          class=\"form-control\"\n          type=\"text\" \n          name=\"name\"\n          required \n          minlength=\"3\" \n          [(ngModel)]=\"editRestaurant.name\"\n          #name=\"ngModel\"\n          (change)=\"showErrors = false\"\n          value=\"editRestaurant.name\"\n        >\n        <div *ngIf=\"duplicatError.length > 0\" class=\"small text-danger\">{{duplicatError}}</div>\n        <div *ngIf=\"name.errors && (name.dirty || name.touched) || showErrors\">\n          <div *ngIf=\"name.errors.required\" class=\"small text-danger\">Name must not be blank</div>\n          <div *ngIf=\"name.errors.minlength\" class=\"small text-danger\">Name must contain at least 3 characters</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Cuisine</label>\n        <input \n          class=\"form-control\"\n          type=\"text\" \n          name=\"cuisine\"\n          required \n          minlength=\"3\" \n          [(ngModel)]=\"editRestaurant.cuisine\"\n          #cuisine=\"ngModel\"\n          (change)=\"showErrors = false\"\n          value=\"editRestaurant.cuisine\"\n        >\n        <div *ngIf=\"cuisine.errors && (cuisine.dirty || cuisine.touched) || showErrors\">\n          <div *ngIf=\"cuisine.errors.required\" class=\"small text-danger\">Cuisine must not be blank</div>\n          <div *ngIf=\"cuisine.errors.minlength\" class=\"small text-danger\">Cuisine must contain at least 3 characters</div>\n        </div>\n      </div>\n      <a (click)=\"closeForm($event)\" class=\"btn btn-danger mr-2 text-white\">Cancel</a>\n      <button type=\"submit\" class=\"btn btn-primary\">Edit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/resto-edit/resto-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/resto-edit/resto-edit.component.ts ***!
  \****************************************************/
/*! exports provided: RestoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoEditComponent", function() { return RestoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestoEditComponent = /** @class */ (function () {
    function RestoEditComponent(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.anEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RestoEditComponent.prototype.ngOnInit = function () {
        this.editRestaurant = {
            name: "",
            rating: "",
            content: ""
        };
        this.duplicatError = "";
        this.getRestoById();
        console.log(this.restoId);
    };
    RestoEditComponent.prototype.getRestoById = function () {
        var _this = this;
        var obs = this._httpService.getRestaurantById(this.restoId);
        obs.subscribe(function (res) {
            console.log('Restaurant by ID', res);
            _this.editRestaurant = res['data'][0];
            _this.prevName = res['data']['name'];
        });
    };
    RestoEditComponent.prototype.editRestoFromDb = function () {
        var _this = this;
        if (this.prevName === this.editRestaurant['name']) {
            this.showErrors = false;
            this.anEventEmitter.emit(false);
        }
        else {
            var obs = this._httpService.updateRestaurantById(this.restoId, this.editRestaurant);
            obs.subscribe(function (res) {
                console.log('Restaurant updated', res);
                if (!res['status']) {
                    if (res['data']['code'] === 11000) {
                        _this.duplicatError = 'Restaurant already exists!';
                    }
                    _this.showErrors = true;
                }
                else {
                    console.log('edit resto');
                    _this.showErrors = false;
                    _this.anEventEmitter.emit(false);
                }
            });
        }
    };
    RestoEditComponent.prototype.closeForm = function () {
        this.anEventEmitter.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RestoEditComponent.prototype, "restoId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RestoEditComponent.prototype, "isFormVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RestoEditComponent.prototype, "anEventEmitter", void 0);
    RestoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resto-edit',
            template: __webpack_require__(/*! ./resto-edit.component.html */ "./src/app/resto-edit/resto-edit.component.html"),
            styles: [__webpack_require__(/*! ./resto-edit.component.css */ "./src/app/resto-edit/resto-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RestoEditComponent);
    return RestoEditComponent;
}());



/***/ }),

/***/ "./src/app/resto-new/resto-new.component.css":
/*!***************************************************!*\
  !*** ./src/app/resto-new/resto-new.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RvLW5ldy9yZXN0by1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/resto-new/resto-new.component.html":
/*!****************************************************!*\
  !*** ./src/app/resto-new/resto-new.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <form (submit)=\"createRestaurant()\" class=\"col-md-6 offset-md-3\">\n    <h2 class=\"display-4 display-5 mt-5 mb-4\">Register a Restaurant:</h2>\n    <div class=\"form-group\">\n      <label>Restaurant Name</label>\n      <!-- <input Name=\"text\" class=\"form-control\" name=\"newResto.name\" [(ngModel)]=\"newResto.name\"> -->\n      <input \n        class=\"form-control\"\n        type=\"text\" \n        name=\"name\"\n        required \n        minlength=\"3\" \n        [(ngModel)]=\"newResto.name\"\n        #name=\"ngModel\"\n        (change)=\"showErrors = false\"\n      >\n      <div *ngIf=\"duplicatError.length > 0\" class=\"small text-danger\">{{duplicatError}}</div>\n      <div *ngIf=\"name.errors && (name.dirty || name.touched) || showErrors\">\n        <div *ngIf=\"name.errors.required\" class=\"small text-danger\">Name must not be blank</div>\n        <div *ngIf=\"name.errors.minlength\" class=\"small text-danger\">Name must contain at least 3 characters</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Cuisine</label>\n      <!-- <input Name=\"text\" class=\"form-control\" name=\"newResto.cuisine\" [(ngModel)]=\"newResto.cuisine\"> -->\n      <!-- <div *ngIf=\"errors.cuisine != undefined\" class=\"small text-danger\">{{errors.cuisine.message}}</div> -->\n      <input \n        class=\"form-control\"\n        type=\"text\" \n        name=\"cuisine\"\n        required \n        minlength=\"3\" \n        [(ngModel)]=\"newResto.cuisine\"\n        #cuisine=\"ngModel\"\n        (change)=\"showErrors = false\"\n      >\n      <div *ngIf=\"cuisine.errors && (cuisine.dirty || cuisine.touched) || showErrors\">\n        <div *ngIf=\"cuisine.errors.required\" class=\"small text-danger\">Cuisine must not be blank</div>\n        <div *ngIf=\"cuisine.errors.minlength\" class=\"small text-danger\">Cuisine must contain at least 3 characters</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>IMG</label>\n       <input \n        class=\"form-control\"\n        type=\"text\" \n        name=\"img\"\n        required \n        minlength=\"3\" \n        [(ngModel)]=\"newResto.img\"\n        #img=\"ngModel\"\n        (change)=\"showErrors = false\"\n      >\n      <div *ngIf=\"img.errors && (img.dirty || img.touched) || showErrors\">\n        <div *ngIf=\"img.errors.required\" class=\"small text-danger\">img must not be blank</div>\n        <div *ngIf=\"img.errors.minlength\" class=\"small text-danger\">img must contain at least 3 characters</div>\n      </div>\n    </div>\n    <a (click)=\"goHome()\" class=\"btn btn-danger mr-2 text-white\">Cancel</a>\n    <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/resto-new/resto-new.component.ts":
/*!**************************************************!*\
  !*** ./src/app/resto-new/resto-new.component.ts ***!
  \**************************************************/
/*! exports provided: RestoNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoNewComponent", function() { return RestoNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestoNewComponent = /** @class */ (function () {
    function RestoNewComponent(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
    }
    RestoNewComponent.prototype.ngOnInit = function () {
        this.newResto = {
            name: '',
            cuisine: '',
            img: ''
        };
        this.duplicatError = '';
        this.showErrors = false;
    };
    RestoNewComponent.prototype.goHome = function () {
        this.router.navigate(['/restaurants']);
    };
    RestoNewComponent.prototype.createRestaurant = function () {
        var _this = this;
        console.log('new resto', this.newResto);
        var obs = this._httpService.createRestaurant(this.newResto);
        obs.subscribe(function (res) {
            console.log('Restaurant created', res);
            if (!res['status']) {
                if (res['data']['code'] === 11000) {
                    _this.duplicatError = 'Restaurant already exists!';
                }
                _this.showErrors = true;
            }
            else {
                _this.showErrors = false;
                _this.router.navigate(['/restaurants']);
            }
        });
    };
    RestoNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resto-new',
            template: __webpack_require__(/*! ./resto-new.component.html */ "./src/app/resto-new/resto-new.component.html"),
            styles: [__webpack_require__(/*! ./resto-new.component.css */ "./src/app/resto-new/resto-new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RestoNewComponent);
    return RestoNewComponent;
}());



/***/ }),

/***/ "./src/app/review-all/review-all.component.css":
/*!*****************************************************!*\
  !*** ./src/app/review-all/review-all.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1hbGwvcmV2aWV3LWFsbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/review-all/review-all.component.html":
/*!******************************************************!*\
  !*** ./src/app/review-all/review-all.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\" [ngClass]=\"{'display': !isFormVisible}\">\n    \n    <!-- <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"place\">Search Google place</label>\n              <input class=\"form-control\" type=\"text\" id=\"place\" #search [formControl]=\"searchControl\" autocomplete=\"off\" autcapitalize=\"off\"  spellcheck=\"off\" />\n              <input class=\"form-control\" type=\"text\" value={{selectedAddress}}>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n              <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" [scrollwheel]=\"off\" style=\"height:300px\" >\n                <agm-marker *ngFor=\"let latlong of latlongs\" [latitude]=\"latlong.latitude\" [longitude]=\"latlong.longitude\" (markerClick)=\"selectMarker($event)\"\n                >\n    \n                </agm-marker>\n              </agm-map>\n            </div>\n        </div>\n    </div> -->\n  \n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      \n      <!-- <a class=\"btn btn-primary text-white mt-3\" (click)=\"toggleForm()\">Add a User</a> -->\n      <!-- <a class=\"btn btn-success text-white mt-3\" [routerLink]=\"['/restaurants', resto._id ,'review']\">New Review</a> -->\n      <a class=\"btn btn-success text-white mt-3\" [routerLink]=\"['review']\" (click)=\"toggleForm()\">New Review</a>\n    </div>\n    \n    <div class=\"col-md-6\">\n      <h4 class=\"display-4 display-5\"><small>Reviews for {{resto.name}}</small></h4>\n      <p class=\"d-inline p-2\"> Average Rating: {{avgRate | number : '1.2'}}</p>\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n    <h4 class=\"display-4 display-5\"><small>Current Reviews:</small></h4>\n  </div>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Customer</th>\n        <th>Stars</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of resto.reviews\">\n        <td>{{item.name}}</td>\n        <td>{{item.rating}}</td>\n        <td>{{item.content}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<app-review-new *ngIf=\"isFormVisible\" [resto]=\"resto\" (anEventEmitter)=\"dataFromChild($event)\"></app-review-new>\n"

/***/ }),

/***/ "./src/app/review-all/review-all.component.ts":
/*!****************************************************!*\
  !*** ./src/app/review-all/review-all.component.ts ***!
  \****************************************************/
/*! exports provided: ReviewAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewAllComponent", function() { return ReviewAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReviewAllComponent = /** @class */ (function () {
    function ReviewAllComponent(route, _httpService, router, orderPipe, mapsAPILoader, ngZone) {
        this.route = route;
        this._httpService = _httpService;
        this.router = router;
        this.orderPipe = orderPipe;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.latlongs = [];
        this.latlong = {};
    }
    ReviewAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resto = {};
        this.isFormVisible = false;
        this.avgRate = 0;
        this.getRestoById();
        // google maps
        this.zoom = 8;
        this.latitude = 37.335;
        this.longitude = -121.89;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.setCurrentPosition();
        // this.mapsAPILoader.load().then(() => {
        //        this.geocoder = new google.maps.Geocoder();
        //      });
        this.mapsAPILoader.load().then(function () {
            // this.geocoder = new google.maps.Geocoder();
            // this.updateOnMap();
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: [],
                componentRestrictions: { 'country': 'US' }
            });
            console.log(autocomplete);
            // console.log(autocomplete['zr'].gm_bindings_);
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    console.log(place.formatted_address);
                    console.log(place.name);
                    if (place.geometry === undefined || place.geometry == null) {
                        return;
                    }
                    var latlong = {
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng(),
                    };
                    _this.selectedAddress = place.name + ', ' + place.formatted_address;
                    console.log(_this.selectedAddress);
                    _this.latlongs.push(latlong);
                    // this.searchControl.reset();
                });
            });
        });
    };
    ReviewAllComponent.prototype.findLocation = function (address) {
        if (!this.geocoder) {
            this.geocoder = new google.maps.Geocoder();
        }
        this.geocoder.geocode({
            'name': address
        }, function (results, status) {
            console.log(results);
            if (status === google.maps.GeocoderStatus.OK) {
                console.log(status);
                //  for (let i = 0; i < results[0].address_components.length; i++) {
                //    let types = results[0].address_components[i].types 
                //    console.log(types); 
                //    if (types.indexOf('locality') != -1) { 
                //      this.location.address_level_2 = results[0].address_components[i].long_name 
                //    } 
                //    if (types.indexOf('country') != -1) { 
                //      this.location.address_country = results[0].address_components[i].long_name 
                //    } 
                //    if (types.indexOf('postal_code') != -1) { 
                //      this.location.address_zip = results[0].address_components[i].long_name 
                //    } 
                //    if (types.indexOf('administrative_area_level_1') != -1) { 
                //      this.location.address_state = results[0].address_components[i].long_name 
                //    } 
                //  } 
                //  if (results[0].geometry.location) { 
                //    this.location.lat = results[0].geometry.location.lat(); 
                //    this.location.lng = results[0].geometry.location.lng(); 
                //    this.location.marker.lat = results[0].geometry.location.lat(); 
                //  this.location.marker.lng = results[0].geometry.location.lng(); 
                //   this.location.marker.draggable = true; 
                //    this.location.viewport = results[0].geometry.viewport; 
                //  }
                // this.map.triggerResize()
            }
            else {
                alert('Sorry, this search produced no results.');
            }
        });
    };
    ReviewAllComponent.prototype.updateOnMap = function () {
        console.log('updating');
        var name = this.searchControl.value;
        this.findLocation(name);
        console.log(name);
    };
    ReviewAllComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 8;
            });
        }
    };
    ReviewAllComponent.prototype.selectMarker = function (event) {
        console.log(event);
        this.selectedMarker = {
            lat: event.latitude,
            lng: event.longitude
        };
        console.log(this.selectedMarker);
    };
    ReviewAllComponent.prototype.toggleForm = function () {
        this.isFormVisible = !this.isFormVisible;
    };
    ReviewAllComponent.prototype.getRestoById = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.avgRate = 0;
            var observable = _this._httpService.getRestaurantById(params['id']);
            observable.subscribe(function (res) {
                console.log(res);
                // console.log('avg: ' + this.avgRate);
                _this.resto = res['data'][0];
                _this.reviews = _this.resto['reviews'];
                _this.reviews = _this.orderPipe.transform(_this.resto['reviews'], 'rating');
                for (var i = 0; i < _this.reviews.length; i++) {
                    _this.avgRate = _this.avgRate + _this.reviews[i]['rating'];
                }
                if (_this.reviews.length > 0) {
                    _this.avgRate = _this.avgRate / _this.reviews.length;
                    // this.avgRate = parseFloat(Math.round(this.avgRate*10^2)/10^2);
                    _this.updateRate(params['id']);
                }
                console.log(_this.reviews);
                // const myform = document.getElementById('myform');
                // myform.onsubmit = function() {
                //   myform.submit();
                // };
                // this.reviews.sort(this.compare);
                // console.log(this.avgRate);
            });
        });
    };
    ReviewAllComponent.prototype.updateRate = function (restoid) {
        var observable = this._httpService.updateRestaurantRateById(restoid, this.avgRate, this.resto);
        observable.subscribe(function (res) {
            // console.log(res);
        });
    };
    ReviewAllComponent.prototype.dataFromChild = function (eventData) {
        console.log('eventData', eventData);
        this.isFormVisible = eventData;
        this.getRestoById();
    };
    ReviewAllComponent.prototype.compare = function (a, b) {
        var genreA = a.rating;
        var genreB = b.rating;
        var comparison = 0;
        if (genreA < genreB) {
            comparison = 1;
        }
        else if (genreA > genreB) {
            comparison = -1;
        }
        return comparison;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReviewAllComponent.prototype, "searchElementRef", void 0);
    ReviewAllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-all',
            template: __webpack_require__(/*! ./review-all.component.html */ "./src/app/review-all/review-all.component.html"),
            styles: [__webpack_require__(/*! ./review-all.component.css */ "./src/app/review-all/review-all.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderPipe"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ReviewAllComponent);
    return ReviewAllComponent;
}());



/***/ }),

/***/ "./src/app/review-new/review-new.component.css":
/*!*****************************************************!*\
  !*** ./src/app/review-new/review-new.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1uZXcvcmV2aWV3LW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/review-new/review-new.component.html":
/*!******************************************************!*\
  !*** ./src/app/review-new/review-new.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <form (submit)=\"createReview()\" class=\"col-md-6 offset-md-3\">\n    <h2 class=\"display-4 display-5 mt-5 mb-4\">Write a Review for {{resto.name}}</h2>\n    <div class=\"form-group\">\n      <label>Your Name</label>\n      <input \n        class=\"form-control\"\n        type=\"text\" \n        name=\"name\"\n        required \n        minlength=\"3\" \n        [(ngModel)]=\"newReview.name\"\n        #name=\"ngModel\"\n        (change)=\"showErrors = false\"\n      >\n      <!-- <div *ngIf=\"duplicatError.length > 0\" class=\"small text-danger\">{{duplicatError}}</div> -->\n      <div *ngIf=\"name.errors && (name.dirty || name.touched) || showErrors\">\n        <div *ngIf=\"name.errors.required\" class=\"small text-danger\">Name must not be blank</div>\n        <div *ngIf=\"name.errors.minlength\" class=\"small text-danger\">Name must contain at least 3 characters</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Stars</label>\n      <select class=\"form-control\" id=\"exampleFormControlSelect1\" name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\">\n        <option selected value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n      </select>\n      <div *ngIf=\"selectError.length > 0\" class=\"small text-danger\">{{selectError}}</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Your Review:</label>\n      <input \n        class=\"form-control\"\n        type=\"text\" \n        name=\"content\"\n        required \n        minlength=\"3\" \n        [(ngModel)]=\"newReview.content\"\n        #content=\"ngModel\"\n        (change)=\"showErrors = false\"\n      >\n      <div *ngIf=\"content.errors && (content.dirty || content.touched) || showErrors\">\n        <div *ngIf=\"content.errors.required\" class=\"small text-danger\">Review must not be blank</div>\n        <div *ngIf=\"content.errors.minlength\" class=\"small text-danger\">Review must contain at least 3 characters</div>\n      </div>\n    </div>\n    <a (click)=\"closeForm($event)\" class=\"btn btn-danger mr-2 text-white\">Cancel</a>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/review-new/review-new.component.ts":
/*!****************************************************!*\
  !*** ./src/app/review-new/review-new.component.ts ***!
  \****************************************************/
/*! exports provided: ReviewNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewNewComponent", function() { return ReviewNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewNewComponent = /** @class */ (function () {
    function ReviewNewComponent(_httpService) {
        this._httpService = _httpService;
        this.anEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ReviewNewComponent.prototype.ngOnInit = function () {
        this.newReview = {
            name: "",
            rating: "",
            content: ""
        };
        this.selectError = "";
        this.showErrors = false;
        console.log(this.resto);
    };
    ReviewNewComponent.prototype.closeForm = function () {
        this.anEventEmitter.emit(false);
    };
    ReviewNewComponent.prototype.createReview = function () {
        var _this = this;
        var obs = this._httpService.createReview(this.resto['_id'], this.newReview);
        obs.subscribe(function (res) {
            console.log("Review created", res);
            if (!res['status']) {
                if (_this.newReview['rating'].length === 0) {
                    _this.selectError = "Rating cannot be blank";
                }
                else if (_this.newReview['rating'] < 1 || _this.newReview['rating'] > 6) {
                    _this.selectError = "Rating must be between 1 and 5";
                }
                _this.showErrors = true;
            }
            else {
                _this.showErrors = false;
                _this.anEventEmitter.emit(false);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReviewNewComponent.prototype, "resto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReviewNewComponent.prototype, "isFormVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ReviewNewComponent.prototype, "anEventEmitter", void 0);
    ReviewNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-new',
            template: __webpack_require__(/*! ./review-new.component.html */ "./src/app/review-new/review-new.component.html"),
            styles: [__webpack_require__(/*! ./review-new.component.css */ "./src/app/review-new/review-new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ReviewNewComponent);
    return ReviewNewComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Min Huang\Desktop\Mean_stack\Restro\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map