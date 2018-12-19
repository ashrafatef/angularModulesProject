import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitsPipe } from './limits.pipe';

@NgModule({
  declarations: [LimitsPipe],
  imports: [
    CommonModule
  ],
  exports : [
    LimitsPipe
  ]
})
export class PipsModule { }
