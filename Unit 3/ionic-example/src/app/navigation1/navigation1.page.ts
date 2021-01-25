import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navigation1',
  templateUrl: './navigation1.page.html',
  styleUrls: ['./navigation1.page.scss'],
})
export class Navigation1Page implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    console.log("Page 1 loaded");
  }

  goToPage2() {
    this.navController.navigateForward(['/navigation2']);
  }

}
