import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './main-button/main-button.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { PipsModule } from '../shared/pips/pips.module';
// import { HeaderComponent } from './header/header.component';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainButtonComponent,
    MainTitleComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    PipsModule,
    ServicesModule,
    SharedModule
  ],
  exports : [
    MainButtonComponent,
    MainTitleComponent,
    // HeaderComponent
  ]
})
export class ComponentsModule { }
