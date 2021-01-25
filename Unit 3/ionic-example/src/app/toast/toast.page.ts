import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss']
})
export class ToastPage implements OnInit {
  constructor(public toastCtrl: ToastController) {}

  async showToast() {
    const toast = await this.toastCtrl.create({
      message: 'I\'m a toast message',
      duration: 5000, // 5 seconds
      position: 'middle',
      color: 'dark',
      buttons: [
        {
          // text: ' Close',
          icon: 'close-circle',
          role: 'cancel'
          // handler:  () => {
          //   toast.dismiss();
          // }
        }
      ]
    });
    await toast.present();
    // Code after the toast is closed
  }

  ngOnInit() {}
}
