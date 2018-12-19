import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-mission-section',
  templateUrl: './mission-section.component.html',
  styleUrls: ['./mission-section.component.scss']
})
export class MissionSectionComponent implements OnInit {

  Users : {name : string , age : number} [] = [];
  constructor(private userServices : UsersService) { }

  ngOnInit() {
    this.Users = this.userServices.UsersList ;
  }

}
