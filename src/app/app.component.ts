import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { UserAuthService } from './services/auth/user-auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  


  constructor(private userAuth : UserAuthService,
    private _translate:TranslateService){
    this._translate.setDefaultLang('en');
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDcKUh36RZhlBF6wYPVomAu5mxqNClZfcQ",
      authDomain: "angular-httpckient.firebaseapp.com",
    })
  }

  onLogout(){
    this.userAuth.logout();
  }
}
