import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverContentComponent } from './popover-content/popover-content.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  color = '';

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async showPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverContentComponent,
      componentProps: {
        title: 'Choose a color'
      },
      event
    });

    await popover.present();
    const resp = await popover.onDidDismiss();
    this.color = resp.data ? resp.data : 'No color selected';
    console.log(resp);
  }
}
