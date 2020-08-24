"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Tab1Page = void 0;
var core_1 = require("@angular/core");
var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
        this.pageTitle = "Home";
        this.activityList = [
            {
                id: 0,
                name: "Playing Marbles",
                description: "This is famously called ukuzwinka ekasi and it is mostly found in the fun parks(municipality made) and in tree(personally made)",
                imageURL: "assets/ali.jpeg",
                popularity: 7,
                category: "Game",
                keywords: "ama ali, ali"
            },
            {
                id: 1,
                name: "Uku zwinka ekasi",
                description: "This is a famous game ekasi amongst the youth in winter, mostly in winter. It can be moneytised as some form of gambling but they children generally play it for free",
                imageURL: "assets/zwink.jpeg",
                popularity: 7.5,
                category: "Game",
                keywords: "Zwinka, swinging"
            },
            {
                id: 2,
                name: "Umkhozi",
                description: "This is some form of self employment amongst the south african parents, where by they put a stand/table to sell sweets, snacks, vegetables and fruits etc to the general public.",
                imageURL: "assets/mkhozi.jpeg",
                popularity: 9,
                category: "Business",
                keywords: "Mkhozi, shop, spaza, stand"
            },
            {
                id: 3,
                name: "Playing Marimba",
                description: "This is an elder playing a famous african musical instrument called marimba. Its pretty similar to a piano",
                imageURL: "assets/marimba.jpeg",
                popularity: 9,
                category: "Music",
                keywords: "african music, african instrument, marimba, marimbarist, music"
            },
            {
                id: 4,
                name: "Mother-Child Love",
                description: "This is a typical african woman bonding and showing love to her child",
                imageURL: "assets/child-parent.jpeg",
                popularity: 10,
                category: "Parenting",
                keywords: "mama, mother, love, bonding, women, african"
            },
        ];
    }
    // constructor(private activityService: ActivityService) {}
    // // life cycle hooks
    Tab1Page.prototype.ngOnInit = function () {
        //   //   console.log("Data Receiving stage");
        //   //   this.activityService.getAllActivities().subscribe({
        //   //     next: (activityList) => (this.activityList = activityList),
        //   //     error: (err) => (this.errorMessage = err),
        //   // });
    };
    Tab1Page = __decorate([
        core_1.Component({
            selector: "app-tab1",
            templateUrl: "tab1.page.html",
            styleUrls: ["tab1.page.scss"]
        })
    ], Tab1Page);
    return Tab1Page;
}());
exports.Tab1Page = Tab1Page;
