import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    HomePage,
    IonicModule.forRoot(),
  ],
})
export class HomePageModule {}
