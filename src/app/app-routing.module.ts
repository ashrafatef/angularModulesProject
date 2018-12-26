import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    loadChildren: './pages/users/users.module#UsersModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#AuthModule',
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
