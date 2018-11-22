import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EasytravelPage } from './easytravel';

@NgModule({
  declarations: [
    EasytravelPage,
  ],
  imports: [
    IonicPageModule.forChild(EasytravelPage),
  ],
})
export class EasytravelPageModule {}
