import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonApp, IonicModule } from '@ionic/angular';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';
import { MyApp } from './app.component';

import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { Global } from '../providers/global';

class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    // do something with the error
  }
}

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    PhotoViewer,
    IonicModule.forRoot({
      backButtonText: '',
      backButtonIcon: 'md-arrow-back',
      mode:'md',
    }),
  ],
  bootstrap: [IonApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,Global,
    {provide: ErrorHandler, useClass: MyErrorHandler}
  ]
})
export class AppModule {}
