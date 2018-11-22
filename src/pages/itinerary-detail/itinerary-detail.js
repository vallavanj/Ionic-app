var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the ItineraryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItineraryDetailPage = /** @class */ (function () {
    function ItineraryDetailPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.id = navParams.get('id');
    }
    ItineraryDetailPage.prototype.getJSON = function () {
        return this.http.get("assets/docs/itenarydetail.json", { responseType: "text" });
    };
    ItineraryDetailPage.prototype.ionViewDidLoad = function () {
        // console.log(this.id);
        var _this = this;
        this.getJSON().subscribe(function (data) {
            var id = _this.id;
            var Json_data = JSON.parse(data);
            var itneray_detail = [];
            itneray_detail.push(Json_data[id]);
            _this.get_data = itneray_detail;
            console.log(itneray_detail);
            //console.log(this.get_data['0']['sub_content'] );
        });
    };
    ItineraryDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-itinerary-detail',
            templateUrl: 'itinerary-detail.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpClient])
    ], ItineraryDetailPage);
    return ItineraryDetailPage;
}());
export { ItineraryDetailPage };
//# sourceMappingURL=itinerary-detail.js.map