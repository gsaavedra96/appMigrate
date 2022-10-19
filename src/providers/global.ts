import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SearchPopPage } from 'src/pages/search-pop/search-pop';

@Injectable() 
export class Global {
 constructor(public popoverCtrl: PopoverController) {

  }   
   // search Popover
  async callSearch(myEvent) {
    const popover = await this.popoverCtrl.create({
      component : SearchPopPage,
      event : myEvent
    });
    await popover.present();
  } 

}      


                    