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
      "ID": "1",
      "day1":"Day 1",
      "date_duration":"Monday, October 16,2017",
      "title" :"Welcome To Israle",
      "description" :"Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
      "url": 'assets/imgs/'
   },
   {
      "ID": "2",
      "day1":"Day 2",
      "date_duration":"Monday, October 16,2017",
      "title" :"Welcome To Ancient Israel ",
      "description" :"Visit the CHW Terry Schwarzfeld (Ottawa) Daycare in Akko",
      "url": 'app/Images/One.jpg'
   },
   {
      "ID": "3",
      "day1":"Day 3",
      "date_duration":"Monday, October 16,2017",
      "title" :"Welcome To Israle",
      "description" :"Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
      "url": 'app/Images/One.jpg'
   },
   {
      "ID": "4",
      "day1":"Day 4",
      "date_duration":"Monday, October 16,2017",
      "title" :"Welcome TO Israle",
      "description" :"Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
      "url": 'app/Images/One.jpg'
   },
   {
      "ID": "5",
      "day1":"Day 6",
      "date_duration":"Monday, October 16,2017",
      "title" :"Welcome TO Israle",
      "description" :"Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
      "url": 'app/Images/One.jpg'
   },
   {
      "ID": "1",
      "day1":"Day 1",
      "date_duration":"Monday, October 16,2017",
      "title" :"Welcome TO Israle",
      "description" :"Yam Hall, M Floor, Royal Beach Hotel, Tel Aviv Featuring guest speaker Dr. Esther Carmel-Hakim",
      "url": 'app/Images/One.jpg'
   }
   ];



}

