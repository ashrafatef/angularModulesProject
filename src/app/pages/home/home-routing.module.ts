import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingSectionComponent } from './landing-section/landing-section.component';

const routes: Routes = [
  {
    path: '',
    component: LandingSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
