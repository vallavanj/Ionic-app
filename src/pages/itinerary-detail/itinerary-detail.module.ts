import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItineraryDetailPage } from './itinerary-detail';

@NgModule({
  declarations: [
    ItineraryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ItineraryDetailPage),
  ],
})
export class ItineraryDetailPageModule {}
