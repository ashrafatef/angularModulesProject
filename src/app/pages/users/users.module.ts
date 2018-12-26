import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ServicesModule } from 'src/app/services/services.module';

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ServicesModule
  ]
})
export class UsersModule { }
