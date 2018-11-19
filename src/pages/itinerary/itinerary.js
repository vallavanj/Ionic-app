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
import { ItineraryDetailPage } from '../itinerary-detail/itinerary-detail';
/**
 * Generated class for the ItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItineraryPage = /** @class */ (function () {
    function ItineraryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itenarylist = [{
                "ID": "1",
                "day1": "Day 1",
                "date_duration": "Monday, October 16,2017",
                "title": "Welcome To Israle",
                "description": "Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
                "url": 'assets/imgs/'
            },
            {
                "ID": "2",
                "day1": "Day 2",
                "date_duration": "Monday, October 16,2017",
                "title": "Welcome To Ancient Israel ",
                "description": "Visit the CHW Terry Schwarzfeld (Ottawa) Daycare in Akko",
                "url": 'app/Images/One.jpg'
            },
            {
                "ID": "3",
                "day1": "Day 3",
                "date_duration": "Monday, October 16,2017",
                "title": "Welcome To Israle",
                "description": "Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
                "url": 'app/Images/One.jpg'
            },
            {
                "ID": "4",
                "day1": "Day 4",
                "date_duration": "Monday, October 16,2017",
                "title": "Welcome TO Israle",
                "description": "Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
                "url": 'app/Images/One.jpg'
            },
            {
                "ID": "5",
                "day1": "Day 6",
                "date_duration": "Monday, October 16,2017",
                "title": "Welcome TO Israle",
                "description": "Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
                "url": 'app/Images/One.jpg'
            },
            {
                "ID": "1",
                "day1": "Day 1",
                "date_duration": "Monday, October 16,2017",
                "title": "Welcome TO Israle",
                "description": "Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
                "url": 'app/Images/One.jpg'
            }
        ];
    }
    ItineraryPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ItineraryPage');
    };
    ItineraryPage.prototype.itenary_details = function (event) {
        var id = event.target.id;
        this.navCtrl.push(ItineraryDetailPage, { id: id });
    };
    ItineraryPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-itinerary',
            templateUrl: 'itinerary.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ItineraryPage);
    return ItineraryPage;
}());
export { ItineraryPage };
//# sourceMappingURL=itinerary.js.map