import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';
const { Toast } = Plugins;

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  async showToast() {
    await Toast.show({
      text: 'I\'m a toast notification',
      duration: 'short'
    });
  }

}
