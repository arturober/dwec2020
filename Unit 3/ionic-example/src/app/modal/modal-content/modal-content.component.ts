import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent implements OnInit {
  @Input() name;
  food = 'pizza';

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  chooseFood() {
    this.modalCtrl.dismiss({food: this.food});
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
