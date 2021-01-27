import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {
  name = '';

  constructor(private toastCtrl: ToastController) { }

  async ngOnInit() {
    const {value} = await Storage.get({key: 'name'});
    if (value) {
      this.name = value;
    }
  }

  async save() {
    await Storage.set({key: 'name', value: this.name});

    const toast = await this.toastCtrl.create({
      message: 'Name saved!',
      duration: 1500,
      position: 'middle',
    });
    toast.present();
  }

}
