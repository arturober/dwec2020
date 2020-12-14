import { Component, ViewChild } from '@angular/core';
import { SwalComponent, SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sweetalert';
  name = '';
  @ViewChild('helloSwal') private helloSwal!: SwalComponent;

  constructor(public readonly swalTargets: SwalPortalTargets) {}

  sayHello(name: string): void {
    this.name = name;
    this.helloSwal.fire();
  }

  goBack(): void {
    console.log('No name provided...');
  }

  helloClosed(): void {
    console.log('Hello window closed...');
  }
}
