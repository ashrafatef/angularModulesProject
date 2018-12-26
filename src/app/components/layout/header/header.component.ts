import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Angular 7 Tour';
  
  constructor(private userAuth : UserAuthService , private translate: TranslateService) { }

  ngOnInit() {
  }

  onLogout(){
    this.userAuth.logout();
  }

  switchLanguage(language: string) {
 
    this.translate.use(language);
  }

}
