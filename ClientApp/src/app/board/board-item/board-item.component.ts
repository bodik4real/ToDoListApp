import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Board } from '../../models/Board';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent {

  @Input() public board: Board;
  @Output() public boardDelete = new EventEmitter<string>();

  constructor(private router: Router) { }

  public openTasks() {
    this.router.navigate(['/board/' + this.board.id]);
  }

  public removeBoard() {
    this.boardDelete.emit(this.board.id);
  }
}
