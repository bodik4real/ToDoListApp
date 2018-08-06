import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuBarComponent
  ],
  exports: [
   MenuBarComponent
  ]
})

export class MenuBarModule { }
