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
                "ID": "0",
                "day1": "Day 1",
                "date_duration": "Monday, October 16,2017",
                "title": "Welcome To Israle",
                "description": "Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
                "url": 'assets/imgs/Israel@3x.png'
            },
            {
                "ID": "1",
                "day1": "Day 2",
                "date_duration": "Tuseday, October 17,2017",
                "title": "Ancient Israel & CHW's Northern Projects",
                "description": "Breakfast at The Royal Beach Hotel, Tel Aviv ",
                "url": 'assets/imgs/royalbeachDetail@3x.png'
            },
            {
                "ID": "2",
                "day1": "Day 3",
                "date_duration": "Monday, October 18,2017",
                "title": "Israeli Entrepreneurship & CHW Hadassim Children and Youth Village ",
                "description": "Meet with successful entrepreneur and CHW Netanya Tech graduate, Adi Avital. ",
                "url": 'assets/imgs/HadassahDetail@3x.png'
            },
            {
                "ID": "3",
                "day1": "Day 4",
                "date_duration": "Monday, October 19,2017",
                "title": "Assaf Harofeh Medical Center & Reception Hosted by CHW Netanya Technological High School",
                "description": "Explore the work of physicians, nurses and staff at Assaf Harofeh Medical Center and enjoy lunch at the facility",
                "url": 'assets/imgs/AssafharofehmedicalcenterDetail@3x.png'
            },
            {
                "ID": "4",
                "day1": "Day 5",
                "date_duration": "Monday, October 20,2017",
                "title": "Wine & Dine (Farewell to 5-Day Trip Participants) ",
                "description": "Visit Barkan Winery for a tour of this award-winning modern winery. Enjoy wine tasting, followed by lunch at the winery",
                "url": 'assets/imgs/CramimDetail@3x.png'
            },
            {
                "ID": "5",
                "day1": "Day 6",
                "date_duration": "Monday, October 21,2017",
                "title": "Shabbat & Leisure Day ",
                "description": "Breakfast/Brunch at Cramim Resort & Spa, Kiryat Anavim, served until 12:00 PM ",
                "url": 'assets/imgs/Shabbat@3x.png'
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