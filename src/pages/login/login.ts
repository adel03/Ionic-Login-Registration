import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';

import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private ofAuth: AngularFireAuth,private toast:ToastController
    ,public navCtrl: NavController, public navParams: NavParams) {
  }

  /*ionViewDidLoad() {
    this.ofAuth.authState.take(1).subscribe(data => {
      if(data.email){
        this.toast.create({
          message:`Welcome to APP_NAME ${data.email}`,duration:3000
        }).present();
      }else{
        this.toast.create({
          message:`Couldn't find autantication details !!`,duration:3000
        }).present();
      }
      
      //this.profileData = this.afDatabase.object(`profile/${data.uid}`)

    })
  }*/
  showToast(msg) {
    let toast = this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  signIn(user : User) {

    if(user.email && user.password){
      
      this.ofAuth.auth.signInWithEmailAndPassword(user.email,user.password)
      .then(auth=>{this.navCtrl.setRoot(ProfilePage)}
    ).catch(err =>{this.showToast(err.message)})
    }else{
      this.showToast('Invalid email or password');
    }
  }

  goRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }

}
