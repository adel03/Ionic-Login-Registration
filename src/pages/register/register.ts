import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../../models/user';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;

  constructor(private ofAuth: AngularFireAuth,private toast:ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  showToast(msg) {
    let toast = this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  registerUser(user:User){
    if(user.email && user.password){
      this.ofAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(auth=>{this.navCtrl.setRoot(LoginPage)}
    ).catch(err =>{this.showToast(err.message)})
  }
  else{
    this.showToast('Invalid username or password');
  }
   }

}
