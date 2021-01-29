import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'App',
      url: '/application',
      icon: 'apps'
    },
    {
      title: 'Barcode Scanner',
      url: '/barcode-scanner',
      icon: 'barcode'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Clipboard',
      url: '/clipboard',
      icon: 'clipboard'
    },
    {
      title: 'Contacts',
      url: '/contacts',
      icon: 'people'
    },
    {
      title: 'Device Info',
      url: '/device',
      icon: 'phone-portrait'
    },
    {
      title: 'Driving directions',
      url: '/driving-directions',
      icon: 'navigate'
    },
    {
      title: 'Facebook Login',
      url: '/facebook-login',
      icon: 'logo-facebook'
    },
    {
      title: 'Filesystem',
      url: '/filesystem',
      icon: 'folder'
    },
    {
      title: 'Flashlight',
      url: '/flashlight',
      icon: 'flashlight'
    },
    {
      title: 'Geolocation',
      url: '/geolocation',
      icon: 'pin'
    },
    {
      title: 'Google Login',
      url: '/google-login',
      icon: 'logo-google'
    },
    {
      title: 'Keyboard',
      url: '/keyboard',
      icon: 'keypad'
    },
    {
      title: 'Local notifications',
      url: '/local-notifications',
      icon: 'notifications'
    },
    {
      title: 'Modals',
      url: '/modals',
      icon: 'alert'
    },
    {
      title: 'Motion',
      url: '/motion',
      icon: 'move'
    },
    {
      title: 'Network',
      url: '/network',
      icon: 'wifi'
    },
    {
      title: 'Social sharing',
      url: '/share',
      icon: 'share'
    },
    {
      title: 'SQLite',
      url: '/sqlite',
      icon: 'grid'
    },
    {
      title: 'Storage',
      url: '/storage',
      icon: 'logo-buffer'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'alarm'
    },
    {
      title: 'Vibration',
      url: '/vibration',
      icon: 'pulse'
    },
  ];

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      if(!this.platform.platforms().includes('desktop')) {
        SplashScreen.hide();
        StatusBar.setBackgroundColor({color: '#3880ff'});
        StatusBar.setStyle({style: StatusBarStyle.Dark});
      }
    });
  }

  ngOnInit() {
  }
}
