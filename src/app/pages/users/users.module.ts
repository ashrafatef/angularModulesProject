import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ServicesModule } from 'src/app/services/services.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ServicesModule,
    SharedModule
  ]
})
export class UsersModule { }
