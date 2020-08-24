"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ActivityService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ActivityService = /** @class */ (function () {
    function ActivityService(httpClient) {
        this.httpClient = httpClient;
        this.activitiesUrl = "api/activity/activities.json";
    }
    ActivityService.prototype.getActivity = function (activityID) {
        return this.httpClient.get(this.activitiesUrl + "/id/" + activityID);
    };
    ActivityService.prototype.log = function (message) {
        console.log(message);
    };
    ActivityService.prototype.getAllActivities = function () {
        return this.httpClient.get(this.activitiesUrl).pipe(operators_1.tap(function (data) { return console.log("All: " + JSON.stringify(data)); }), operators_1.catchError(this.handleError));
    };
    ActivityService.prototype.handleError = function (err) {
        // this should be cahneged to a logging framework rather
        // than simply logging to console
        var errorMessage = "";
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occured: " + err.error.message;
        }
        else {
            // failure response from the backend
            errorMessage = "Server returned code " + err.status + ", error message is : " + err.message;
        }
        console.log(errorMessage);
        return rxjs_1.throwError(errorMessage);
    };
    ActivityService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], ActivityService);
    return ActivityService;
}());
exports.ActivityService = ActivityService;
