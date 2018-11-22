import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SpeakerdetailPage } from '../speakerdetail/speakerdetail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public http:HttpClient) {

  }
public getJSON(): Observable<any> {
	
        return this.http.get("http://113.193.25.20/chwapp/speaker.php?limit=0");
    }
 speaker_list:any[];
  ionViewDidLoad() {

    	this.getJSON().subscribe(data => {
    		this.speaker_list=data['speaker_data'];

    	});

   }
   speakerdetail(event){
   	let id =event.target.id -1;
  	this.navCtrl.push(SpeakerdetailPage, {id: id}); 
   }

}
