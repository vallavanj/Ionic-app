import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItineraryDetailPage } from '../itinerary-detail/itinerary-detail';
/**
 * Generated class for the ItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itinerary',
  templateUrl: 'itinerary.html',
})
export class ItineraryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ItineraryPage');
  }
  itenary_details(event) {
  	let id =event.target.id;
  	this.navCtrl.push(ItineraryDetailPage, {id: id}); 
  }
  itenarylist: any[] = [ {
      "ID": "0",
      "day1":"Day 1",
      "date_duration":"Monday, October 16,2017",
      "title" :"Welcome To Israle",
      "description" :"Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
      "url": 'assets/imgs/Israel@3x.png' 
   },
   {
      "ID": "1",
      "day1":"Day 2",
      "date_duration":"Tuseday, October 17,2017",
      "title" :"Ancient Israel & CHW's Northern Projects",
      "description" :"Breakfast at The Royal Beach Hotel, Tel Aviv ",
      "url": 'assets/imgs/royalbeachDetail@3x.png'
   },
   {
      "ID": "2",
      "day1":"Day 3",
      "date_duration":"Monday, October 18,2017",
      "title" :"Israeli Entrepreneurship & CHW Hadassim Children and Youth Village ",
      "description" :"Meet with successful entrepreneur and CHW Netanya Tech graduate, Adi Avital. ",
      "url": 'assets/imgs/HadassahDetail@3x.png'
   },
   {
      "ID": "3",
      "day1":"Day 4",
      "date_duration":"Monday, October 19,2017",
      "title" :"Assaf Harofeh Medical Center & Reception Hosted by CHW Netanya Technological High School",
      "description" :"Explore the work of physicians, nurses and staff at Assaf Harofeh Medical Center and enjoy lunch at the facility",
      "url": 'assets/imgs/AssafharofehmedicalcenterDetail@3x.png'
   },
   {
      "ID": "4",
      "day1":"Day 5",
      "date_duration":"Monday, October 20,2017",
      "title" :"Wine & Dine (Farewell to 5-Day Trip Participants) ",
      "description" :"Visit Barkan Winery for a tour of this award-winning modern winery. Enjoy wine tasting, followed by lunch at the winery",
      "url": 'assets/imgs/CramimDetail@3x.png'
   },
   {
      "ID": "5",
      "day1":"Day 6",
      "date_duration":"Monday, October 21,2017",
      "title" :"Shabbat & Leisure Day ",
      "description" :"Breakfast/Brunch at Cramim Resort & Spa, Kiryat Anavim, served until 12:00 PM ",
      "url": 'assets/imgs/Shabbat@3x.png'
   }
   ];



}

