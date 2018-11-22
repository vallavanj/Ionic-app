import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AboutprojectPage } from '../aboutproject/aboutproject';
import { AirporttransferPage } from '../airporttransfer/airporttransfer';
import { DresscodePage } from '../dresscode/dresscode';
import { EasytravelPage } from '../easytravel/easytravel';
import { ImportantpagePage } from '../importantpage/importantpage';
import { ShabbatcandlepagePage } from '../shabbatcandlepage/shabbatcandlepage';
import { TelavivpagePage } from '../telavivpage/telavivpage';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
 

export class ContactPage {

  constructor(public navCtrl: NavController,public http:HttpClient) {
  
  }
   aboutproject(event) {
    this.navCtrl.push(AboutprojectPage);
  }
  airporttransfer(event) {
    this.navCtrl.push(AirporttransferPage);
  }
  dresscode(event) {
    this.navCtrl.push(DresscodePage);
  }
  easytravel(event) {
    this.navCtrl.push(EasytravelPage);
  }
  important(event) {
    this.navCtrl.push(ImportantpagePage);
  }
  shabbatcandle(event) {
    this.navCtrl.push(ShabbatcandlepagePage);
  }
  telaviv(event) {
    this.navCtrl.push(TelavivpagePage);
  }
  ionViewDidLoad() {


  }
 

  }
	
 




