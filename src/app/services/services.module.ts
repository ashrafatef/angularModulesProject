import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users/users.service';
import { UserAuthService } from './auth/user-auth.service';
import { AuthGuardService } from './guard/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    UsersService ,
    UserAuthService,
    AuthGuardService,
    HttpClientModule
  ]
})
export class ServicesModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: ServicesModule,
  //     providers: [ UsersService ,
  //       UserAuthService,
  //       AuthGuardService ]
  //   };
  // }
 }
