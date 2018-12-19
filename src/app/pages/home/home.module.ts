import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [LandingSectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule { }
