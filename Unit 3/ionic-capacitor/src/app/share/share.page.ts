import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage {
  message = '';

  constructor() { }

  share() {
    Share.share({
      dialogTitle: 'Share with others!',
      text: this.message
    });
  }
}
