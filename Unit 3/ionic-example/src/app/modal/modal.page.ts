import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  name = '';
  food = '';

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalContentComponent,
      componentProps: { name: this.name }
    });
    await modal.present();
    const result = await modal.onDidDismiss();
    if (result.data && result.data.food) {
      this.food = result.data.food;
    }
  }


}
