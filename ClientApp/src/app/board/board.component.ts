import { Component, OnInit } from '@angular/core';
import { BoardItemComponent } from './board-item/board-item.component';
import { Board } from '../models/Board';
import { UserDataService } from '../services/user-data.service';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public boards = new Array<Board>();

  constructor(private userService: UserDataService, private boardService: BoardService) { }

  ngOnInit() {
    const user = this.userService.getCachedUser();
    if (user) {
      this.boardService.getAllBoards(user.id);
    }

  }

}
