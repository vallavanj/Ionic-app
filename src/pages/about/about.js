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
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SpeakerdetailPage } from '../speakerdetail/speakerdetail';
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    AboutPage.prototype.getJSON = function () {
        return this.http.get("http://localhost/chwapp/speaker.php?limit=0");
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getJSON().subscribe(function (data) {
            _this.speaker_list = data['speaker_data'];
        });
    };
    AboutPage.prototype.speakerdetail = function (event) {
        var id = event.target.id;
        this.navCtrl.push(SpeakerdetailPage, { id: id });
    };
    AboutPage = __decorate([
        Component({
            selector: 'page-about',
            templateUrl: 'about.html'
        }),
        __metadata("design:paramtypes", [NavController, HttpClient])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map