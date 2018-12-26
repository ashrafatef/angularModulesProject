import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from '../auth/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  UsersList = [
    {
      name : 'john',
      age : 25
    },
    {
      name : 'sandra',
      age : 55
    },
    {
      name : 'peter',
      age : 35
    },
    {
      name : 'Mohamed',
      age : 45
    },
    {
      name : 'Ahmed',
      age : 65
    },
  ]

  constructor(private httpClient : HttpClient ,private authService : UserAuthService) { }

  storeUsers(servers:any[]){
    const token = this.authService.getToken() ;

    return this.httpClient.put('https://angular-httpckient.firebaseio.com/data.json',
     servers );
  }
  getUSers(){
    const token = this.authService.getToken() ;
    this.httpClient.get('https://angular-httpckient.firebaseio.com/data.json');
  }

}
