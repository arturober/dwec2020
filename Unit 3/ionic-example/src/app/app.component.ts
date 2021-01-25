import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Action Sheet',
      url: '/action-sheet',
      icon: 'menu'
    },
    {
      title: 'Alerts',
      url: '/alerts',
      icon: 'alert'
    },
    {
      title: 'Badges',
      url: '/badges',
      icon: 'square'
    },
    {
      title: 'Buttons',
      url: '/buttons',
      icon: 'apps'
    },
    {
      title: 'Cards',
      url: '/cards',
      icon: 'albums'
    },
    {
      title: 'Checkbox & Radio',
      url: '/checkbox-radio',
      icon: 'checkbox'
    },
    {
      title: 'Fabs',
      url: '/fabs',
      icon: 'add-circle'
    },
    {
      title: 'Gestures',
      url: '/gestures',
      icon: 'finger-print'
    },
    {
      title: 'Grid',
      url: '/grid',
      icon: 'grid'
    },
    {
      title: 'Horizontal Scroll',
      url: '/horizontal-scroll',
      icon: 'swap-horizontal'
    },
    {
      title: 'Infinite Scroll',
      url: '/infinite-scroll',
      icon: 'infinite'
    },
    {
      title: 'Inputs',
      url: '/inputs',
      icon: 'text'
    },
    {
      title: 'Lists',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Loading',
      url: '/loading',
      icon: 'refresh'
    },
    {
      title: 'Modal',
      url: '/modal',
      icon: 'albums'
    },
    {
      title: 'Navigation',
      url: '/navigation1',
      icon: 'arrow-forward-circle-outline'
    },
    {
      title: 'Popover',
      url: '/popover',
      icon: 'albums'
    },
    {
      title: 'Range',
      url: '/range',
      icon: 'pin'
    },
    {
      title: 'Refresher',
      url: '/refresher',
      icon: 'refresh-circle'
    },
    {
      title: 'Reorder',
      url: '/reorder',
      icon: 'reorder-three'
    },
    {
      title: 'Searchbar',
      url: '/searchbar',
      icon: 'search'
    },
    {
      title: 'Segments',
      url: '/segments',
      icon: 'bookmarks'
    },
    {
      title: 'Select',
      url: '/select',
      icon: 'checkbox'
    },
    {
      title: 'Skeleton',
      url: '/skeleton',
      icon: 'list'
    },
    {
      title: 'Slides',
      url: '/slides',
      icon: 'images'
    },
    {
      title: 'Tabs',
      url: '/tabs',
      icon: 'copy'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'alert'
    },
    {
      title: 'Toolbars',
      url: '/toolbar',
      icon: 'browsers'
    },
    {
      title: 'Virtual Scroll',
      url: '/virtual-scroll',
      icon: 'layers'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
