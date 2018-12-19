import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { MissionSectionComponent } from './mission-section/mission-section.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ServicesModule } from 'src/app/services/services.module';

@NgModule({
  declarations: [MissionSectionComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ComponentsModule,
    ServicesModule
  ]
})
export class AboutModule { }
