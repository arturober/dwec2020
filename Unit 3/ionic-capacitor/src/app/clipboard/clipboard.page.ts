import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { Clipboard } = Plugins;

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
})
export class ClipboardPage implements OnInit {
  text = '';

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async copy() {
    Clipboard.write({
      string: this.text
    });

    const toast = await this.toastCtrl.create({
      message: 'Text copied',
      duration: 1500,
      position: 'middle',
    });
    toast.present();
  }

  async paste() {
    const result = await Clipboard.read();

    this.text = result.value;
  }

}
