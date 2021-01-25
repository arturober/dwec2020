import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navigation2',
  templateUrl: './navigation2.page.html',
  styleUrls: ['./navigation2.page.scss'],
})
export class Navigation2Page implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
    console.log("Page 2 loaded");
  }

  goToPage1() {
    // this.navController.navigateBack(['/navigation1']);
    this.navController.back();
  }
}
