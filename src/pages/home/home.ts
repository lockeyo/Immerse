import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { NavController, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { PopoverController } from 'ionic-angular';
// import { MyPopOverPage } from './modal-content';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    private sms: SMS,
    private toastCtrl: ToastController,
    public modalCtrl: ModalController
  ) {
  }

  sendSms = () => {
    this.sms.send('+16195972798', 'Hello Ian, I am Marcel! I really like your taste of music.').then((result) => {
      let successToast = this.toastCtrl.create({
        message: "Text message sent successfully! :)",
        duration: 3000
      })
      successToast.present();
    }, (error) => {
      let errorToast = this.toastCtrl.create({
        message: "Text message not sent. :(",
        duration: 3000
      })
      errorToast.present();
    });

    console.log('send sms');
  }

}

// Courses
// Tutors
// Notes
// Profile
