import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ItineraryPage } from '../pages/itinerary/itinerary';
import { ItineraryDetailPage } from '../pages/itinerary-detail/itinerary-detail';
import { SpeakerdetailPage } from '../pages/speakerdetail/speakerdetail';
import { AboutprojectPage } from '../pages/aboutproject/aboutproject';
import { AirporttransferPage } from '../pages/airporttransfer/airporttransfer';
import { DresscodePage } from '../pages/dresscode/dresscode';
import { EasytravelPage } from '../pages/easytravel/easytravel';
import { ImportantpagePage } from '../pages/importantpage/importantpage';
import { ShabbatcandlepagePage } from '../pages/shabbatcandlepage/shabbatcandlepage';
import { TelavivpagePage } from '../pages/telavivpage/telavivpage';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ItineraryPage,
    ItineraryDetailPage,
    SpeakerdetailPage,
    AboutprojectPage,
    AirporttransferPage,
    ImportantpagePage,
    DresscodePage,
    ShabbatcandlepagePage,
    EasytravelPage,
    TelavivpagePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ItineraryPage,
    ItineraryDetailPage,
    SpeakerdetailPage,
    AboutprojectPage,
    AirporttransferPage,
    ShabbatcandlepagePage,
    ImportantpagePage,
    TelavivpagePage,
    DresscodePage,
    EasytravelPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
