import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const {GoogleAuth} = Plugins;

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.page.html',
  styleUrls: ['./google-login.page.scss'],
})
export class GoogleLoginPage implements OnInit {
  user = null;

  constructor() { }

  ngOnInit() {
  }

  async login() {
    try {
      this.user = await Plugins.GoogleAuth.signIn();
    } catch (err) {
      console.error(err);
    }
  }

}
