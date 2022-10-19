import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PhotosPage } from './photos';

@NgModule({
  declarations: [
    PhotosPage,
  ],
  imports: [
    PhotosPage,
    IonicModule.forRoot(),
  ],
})
export class PhotosPageModule {}
