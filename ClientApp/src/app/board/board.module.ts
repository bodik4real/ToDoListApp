import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { UserDataService } from '../services/user-data.service';
import { BoardComponent } from './board.component';
import { BoardItemComponent } from './board-item/board-item.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    BoardComponent,
    BoardItemComponent
  ],
  exports: [
    BoardComponent,
  ],
  providers: [UserDataService]
})
export class BoardModule { }
