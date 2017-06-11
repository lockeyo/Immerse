import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { NavController, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { PopoverController } from 'ionic-angular';
// import { MyPopOverPage } from './modal-content';
import { LoginPage } from '../login/login';
import { CoursePage } from '../course/course';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    private sms: SMS,
    private toastCtrl: ToastController,
    public modalCtrl: ModalController
  ) {
    this.presentModal();
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

  presentModal = () => {
    let profileModal = this.modalCtrl.create(LoginPage, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
       console.log(data);
       let registerModal = this.modalCtrl.create(RegistrationPage, { userId: 8675309 });
       registerModal.present();
     });
    profileModal.present();
  }

  page = (data) => {
    console.log(data);
    this.navCtrl.push(CoursePage, {});
  }

}
