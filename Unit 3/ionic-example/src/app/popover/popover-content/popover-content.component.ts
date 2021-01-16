import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-content',
  templateUrl: './popover-content.component.html',
  styleUrls: ['./popover-content.component.scss'],
})
export class PopoverContentComponent implements OnInit {
  @Input() title: string;

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  close(color: string) {
    this.popoverCtrl.dismiss(color);
  }

}
