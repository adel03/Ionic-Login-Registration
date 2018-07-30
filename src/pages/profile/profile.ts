import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';
//import {userProfile} from '../../models/userProfile';
import {AngularFireDatabase} from 'angularfire2/database';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  /*arrData = []
  myInput*/

constructor(private ofAuth: AngularFireAuth,private afDatabase :AngularFireDatabase,
  public navCtrl: NavController, public navParams: NavParams) {
    


}
  

  logOut(){
    
    this.ofAuth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }
}
