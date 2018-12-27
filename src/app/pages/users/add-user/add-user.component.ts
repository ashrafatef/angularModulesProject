import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  users : any ;
  singleUser : {};

  constructor(private userService : UsersService  , public translate: TranslateService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  
  onAddServer(name: string) {
    this.singleUser  = {
      name : name,
      age : this.generateId()
    }
    this.users.push(this.singleUser);
    this.userService.storeUsers(this.users)
    .subscribe(
      (response)=> console.log(response) , 
      (error)=> console.log(error)
    );
  }
  onSave(){
    this.userService.storeUsers(this.users)
    .subscribe(
      (response)=> console.log(response) , 
      (error)=> console.log(error)
    );
  }
  getAllUsers(){
    this.userService.getUSers()
    .subscribe(
      (response)=>{
        if (response) {
          this.users = response ;
        }else{
          this.users = [];
        }
       
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }


}
