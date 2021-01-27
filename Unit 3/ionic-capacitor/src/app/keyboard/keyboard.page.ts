import { Component, OnInit, NgZone } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Keyboard } = Plugins;

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.page.html',
  styleUrls: ['./keyboard.page.scss']
})
export class KeyboardPage implements OnInit {
  visible = false;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    Keyboard.addListener('keyboardWillShow', info =>
      this.ngZone.run(() => (this.visible = true))
    );
    Keyboard.addListener('keyboardWillHide', () =>
      this.ngZone.run(() => (this.visible = false))
    );
  }

  showKeyboard() {
    // Alpha method (may not work well)
    Keyboard.show();
  }

  hideKeyboard() {
    Keyboard.hide();
  }
}
