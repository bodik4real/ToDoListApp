import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateString } from './truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TruncateString],
  exports: [
    TruncateString
  ]
})
export class PipeModule { }
