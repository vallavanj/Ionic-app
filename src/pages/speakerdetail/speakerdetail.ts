import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the SpeakerdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speakerdetail',
  templateUrl: 'speakerdetail.html',
})
export class SpeakerdetailPage {

	id:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  	   this.id = navParams.get('id');
  }
public getJSON(): Observable<any> {
	
        return this.http.get("http://113.193.25.20/chwapp/speaker.php?limit=0");
    }
    speaker_data:any[];
  ionViewDidLoad() {
  this.getJSON().subscribe(data => {
            let id:number =this.id;
            console.log(id);
             let speaker_detail:any[]=[];
              speaker_detail.push(data['speaker_data'][id]);
             this.speaker_data=speaker_detail;
           //console.log(this.speaker_data);
        });
  }

}
