import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PhotosDetailsPage } from './photos-details';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';


@NgModule({
  declarations: [
    PhotosDetailsPage,
  ],
  imports: [
    PhotoViewer,
    IonicModule.forRoot(),
  ],
})
export class PhotosDetailsPageModule {}
