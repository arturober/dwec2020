import { Component } from '@angular/core';

import { Platform, NavController, ToastController } from '@ionic/angular';
import { AuthService } from './auth/services/auth.service';

import {
  Plugins,
  StatusBarStyle,
  PushNotification,
  PushNotificationActionPerformed
} from '@capacitor/core';
import { User } from './users/interfaces/user.interface';
const { SplashScreen, StatusBar, PushNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  menuDisabled = true;
  public appPages = [
    {
      title: 'Product list',
      url: '/products',
      icon: 'home'
    },
    {
      title: 'Add product',
      url: '/products/add',
      icon: 'add-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private authService: AuthService,
    private nav: NavController,
    private toast: ToastController
  ) {
    this.initializeApp();
    this.authService.loginChange$.subscribe(
      logged => this.menuDisabled = !logged
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
      StatusBar.setBackgroundColor({ color: '#3880ff' });
      StatusBar.setStyle({ style: StatusBarStyle.Dark });
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      async (notification: PushNotification) => {
        const toast = await this.toast.create({
          header: notification.title,
          message: notification.body,
          duration: 3000
        });
        await toast.present();
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed', 
      (notification: PushNotificationActionPerformed) => {
        if (notification.notification.data.prodId) {
          this.nav.navigateRoot(['/products', 'details', notification.notification.data.prodId, 'comments']);
        }
      }
    );
  }

  async logout() {
    await this.authService.logout();
    this.nav.navigateRoot(['/auth/login']);
  }
}
