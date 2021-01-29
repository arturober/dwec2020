import { Component, OnInit } from '@angular/core';
import { Plugins, ActionSheetOptionStyle, ActionSheetOption } from '@capacitor/core';
const { Modals } = Plugins;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss']
})
export class ModalsPage implements OnInit {
  confirm = false;
  name = '';
  option = -1;

  constructor() {}

  ngOnInit() {}

  async showAlert() {
    await Modals.alert({
      title: 'Hello',
      message: 'This is an alert'
    });
  }

  async showConfirm() {
    const result = await Modals.confirm({
      title: 'Confirm',
      message: 'Are you going to develop your next app with Ionic?'
    });

    this.confirm = result.value;
  }

  async showPrompt() {
    const result = await Modals.prompt({
      title: 'Hello',
      message: 'What\'s your name?'
    });

    if (!result.cancelled) {
      this.name = result.value;
    }
  }

  async showActions() {
    const result = await Modals.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload',
        },
        {
          title: 'Share'
        },
        {
          title: 'Remove',
          style: ActionSheetOptionStyle.Destructive
        },
        {
          title: 'Cancel',
          style: ActionSheetOptionStyle.Cancel
        }
      ]
    });

    this.option = result.index;
  }
}
