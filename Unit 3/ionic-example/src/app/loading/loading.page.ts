import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage {
  loading: HTMLIonLoadingElement;
  data: string;

  constructor(private loadingCtrl: LoadingController) { }

  async ionViewWillEnter() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading data',
      spinner: 'bubbles',
      cssClass: 'primary'
    });
    await this.loading.present();

    setTimeout(() => {
      this.data = 'Data loaded';
      this.loading.dismiss();
    }, 2000);
  }


}
