import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItineraryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itinerary-detail',
  templateUrl: 'itinerary-detail.html',
})
export class ItineraryDetailPage {
	id:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	   this.id = navParams.get('id');
  }

  ionViewDidLoad() {
   // console.log(this.id);
  }

}
