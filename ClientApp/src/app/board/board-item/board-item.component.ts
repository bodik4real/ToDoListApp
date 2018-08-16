import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../../models/Board';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {

  @Input()
  public board: Board;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public openTasks() {
    this.router.navigate(['/taskList/' + this.board.id]);
  }

  public removeBoard() {

  }

}
