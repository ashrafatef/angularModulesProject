import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './main-button/main-button.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { PipsModule } from '../shared/pips/pips.module';

@NgModule({
  declarations: [MainButtonComponent, MainTitleComponent],
  imports: [
    CommonModule,
    PipsModule
  ],
  exports : [
    MainButtonComponent,
    MainTitleComponent
  ]
})
export class ComponentsModule { }
