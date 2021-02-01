import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
})
export class BarcodeScannerPage {
  data = '';

  constructor(private ngZone: NgZone) { }

  async scan() {
    // this.data = (await this.bcScanner.scan()).text;
    (window.cordova.plugins as any).barcodeScanner.scan(
      result => this.ngZone.run(() => this.data = result),
      err => console.error(err),
      {
        showTorchButton: true,
        prompt: 'Scan your code',
        // formats: "QR_CODE",
        resultDisplayDuration: 0
      }
    );
  }
}
