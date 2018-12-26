import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  users = [
    {
      name: 'Testserver',
      age: 10
    },
    {
      name: 'Liveserver',
      age: 20
    }
  ];

  constructor(private userService : UsersService) { }

  ngOnInit() {
  }

  
  // onAddServer(name: string) {
  //   this.servers.push({
  //     name: name,
  //     capacity: 50,
  //     id: this.generateId()
  //   });
  // }
  onSave(){
    this.userService.storeUsers(this.users)
    .subscribe(
      (response)=> console.log(response) , 
      (error)=> console.log(error)
    );
  }


}
