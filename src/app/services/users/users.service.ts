import { Injectable } from '@angular/core';

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

  constructor() { }
}
