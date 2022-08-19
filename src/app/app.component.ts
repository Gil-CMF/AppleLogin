import { Component } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private jwtHelper:JwtHelperService) {
  }
  title = 'appleLogin';
   signInWithApple = () => {
    const CLIENT_ID = ""
    const REDIRECT_API_URL = ""
    window.open(
      `https://appleid.apple.com/auth/authorize? +
            client_id=${CLIENT_ID}& +
            redirect_uri=${encodeURIComponent(REDIRECT_API_URL)}& +
            response_type=code id_token& +
            scope=name email& +
            response_mode=form_post`,
      '_blank'
    );

    window.addEventListener('message', async event => {
      const decodedToken = this.jwtHelper.decodeToken(event.data.id_token);
      let requestData = {}
      if (event.data.user) {
        const userName = JSON.parse(event.data.user);
        requestData = {
          "email": decodedToken.email,
          "name": `${userName.name.firstName} ${userName.name.lastName}`,
          "socialId": decodedToken.sub,
        };
      } else {
        requestData = {
          "email": decodedToken.email,
          "socialId": decodedToken.sub,
        };
      }
      console.log(`User Data : ${requestData}`);
    });
  };
}
