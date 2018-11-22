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
 * Generated class for the SpeakerdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpeakerdetailPage = /** @class */ (function () {
    function SpeakerdetailPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.id = navParams.get('id');
    }
    SpeakerdetailPage.prototype.getJSON = function () {
        return this.http.get("http://localhost/chwapp/speaker.php?limit=0");
    };
    SpeakerdetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getJSON().subscribe(function (data) {
            var id = _this.id;
            var speaker_detail = [];
            speaker_detail.push(data['speaker_data'][id]);
            _this.speaker_data = speaker_detail;
            //console.log(this.speaker_data);
        });
    };
    SpeakerdetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-speakerdetail',
            templateUrl: 'speakerdetail.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpClient])
    ], SpeakerdetailPage);
    return SpeakerdetailPage;
}());
export { SpeakerdetailPage };
//# sourceMappingURL=speakerdetail.js.map