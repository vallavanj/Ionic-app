import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  	   this.id = navParams.get('id');
  }
	public getJSON(): Observable<any> {
        return this.http.get("assets/docs/itenarydetail.json",{responseType :"text"});
    }
      get_data:any[];
  ionViewDidLoad() {
   // console.log(this.id);

		this.getJSON().subscribe(data => {
            let id:number =this.id;
            let Json_data = JSON.parse(data);
            let itneray_detail:any[]=[];
            itneray_detail.push(Json_data[id]);
             this.get_data=itneray_detail;
             console.log(itneray_detail);
           //console.log(this.get_data['0']['sub_content'] );
        });

  }

}
