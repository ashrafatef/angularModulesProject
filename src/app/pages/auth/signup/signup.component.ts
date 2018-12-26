import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms'
import { UserAuthService } from 'src/app/services/auth/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userAuth : UserAuthService) { }

  ngOnInit() {
  }

  onSignUp(form : NgForm){
    const email = form.value.email ;
    const password = form.value.password ;
    this.userAuth.signupUser(email , password);
  }

}
