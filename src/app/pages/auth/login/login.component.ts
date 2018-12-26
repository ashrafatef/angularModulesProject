import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userAuth : UserAuthService) { }

  ngOnInit() {
  }

  onSignin(form : NgForm){
    const email = form.value.email ;
    const password = form.value.password ;
    this.userAuth.signinUser(email , password);
  }

}
