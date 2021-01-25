import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss']
})
export class AlertsPage implements OnInit {
  resp: string;
  foods: string;
  email: string;
  pass: string;

  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {}

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Hello alert',
      subHeader: 'This is a simple alert',
      message: 'See the official documentation for more examples',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            return { ok: true };
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            return { ok: false };
          }
        }
      ]
    });

    await alert.present();

    const resp = await alert.onDidDismiss();
    // this.resp = resp.role !== 'cancel' ? 'You said Ok!' : 'You cancelled...';
    this.resp = resp.data && resp.data.ok ? 'You said Ok!' : 'You cancelled...';
  }

  async showAlert2() {
    const alert = await this.alertCtrl.create({
      header: 'Select an option',
      inputs: [
        {
          name: 'pizza',
          type: 'checkbox',
          value: 'pizza',
          label: 'Pizza',
        },
        {
          name: 'hamburguer',
          type: 'checkbox',
          value: 'hamburguer',
          label: 'Hamburguer'
        },
        {
          name: 'spaghetti',
          type: 'checkbox',
          value: 'spaghetti',
          label: 'Spaghetti'
        },
        {
          name: 'chicken',
          type: 'checkbox',
          value: 'chicken',
          label: 'Chicken'
        }
      ],
      buttons: ['Ok', 'Cancel']
    });

    await alert.present();

    const resp = await alert.onDidDismiss();
    if (resp.data && resp.role !== 'cancel') {
      console.log(resp.data.values);
      this.foods = resp.data.values.toString();
    }
  }

  async showAlert3() {
    const alert = await this.alertCtrl.create({
      header: 'Login',
      subHeader: 'Enter email and password',
      inputs: [
        {
          type: 'text',
          name: 'email',
          placeholder: 'Email',
        },
        {
          type: 'password',
          name: 'pass',
          placeholder: 'Password',
        }
      ],
      buttons: ['Login', 'Cancel']
    });

    await alert.present();

    const result = await alert.onDidDismiss();
    if (result.data && result.role !== 'cancel') {
      this.email = result.data.values.email;
      this.pass = result.data.values.pass;
    }
  }
}
