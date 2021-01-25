import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  goAbout() {
    this.navController.navigateRoot(['/tabs', 'about']);
  }

  goButtons() {
    this.navController.navigateRoot(['/buttons']);
  }
}
