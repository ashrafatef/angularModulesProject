import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  token : string;
  constructor(private router : Router) { }

  signupUser(email : string , password : string){
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password)
    .catch(
      error => console.log(error)
    );
  }  

  signinUser(email : string , password : string){
    firebase.auth().signInWithEmailAndPassword(email , password)
    .then(
      response => {
        firebase.auth().currentUser.getIdToken()
        .then(
          (token : string) =>{
            this.token = token;
            //console.log(this.token);
            localStorage.setItem('token', this.token);
            this.router.navigateByUrl('/home');
          } 
        )
      }
    )
    .catch(
      error => console.log(error)
    );
  }

  getToken(){
    return localStorage.getItem('token') ;
  }

  isAuthenticated(){
    
    return localStorage.getItem('token') != null ;
  }
  
  logout(){
    firebase.auth().signOut();
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth');
  }
}
