import { Component, NgZone } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-login';
  googleUser!: gapi.auth2.GoogleUser;

  constructor(
    library: FaIconLibrary,
    private ngZone: NgZone
  ) {
    library.addIcons(faGoogle, faFacebook);
  }

  loggedGoogle(user: gapi.auth2.GoogleUser) {
    this.ngZone.run(() => {
      this.googleUser = user;
    });

    // Send this token to your server for register / login
    console.log(user.getAuthResponse().id_token);
    console.log(user.getBasicProfile().getName());
    console.log(user.getBasicProfile().getEmail());
    console.log(user.getBasicProfile().getImageUrl());
  }

  loggedFacebook(resp: fb.StatusResponse) {
    // Send this to your server
    console.log(resp.authResponse.accessToken);
  }

}
