import { Component } from '@angular/core';
import { NavController, NavParams ,ToastController} from 'ionic-angular';
//import { AngularFireObject } from 'angularfire2/database';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
//import { userProfile } from '../../models/userProfile';
//import { database } from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  


  /*constructor(public navCtrl: NavController) {

  }*/
 // public profileData: AngularFireObject  <userProfile>;

  constructor(private ofAuth: AngularFireAuth,private toast:ToastController,
     private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {

      
  }

  
  /*ionViewDidLoad() {
    this.ofAuth.authState.take(1).subscribe(data => {
      if(data.email){
        this.toast.create({
          message:`Welcome to APP_NAME ${data.email}`,duration:3000
        }).present();
        this.profileData = this.afDatabase.object(`profile/${data.uid}`);
      }else{
        this.toast.create({
          message:`Couldn't find autantication details !!`,duration:3000
        }).present();
      }
      
      

    })
  }*/

}
