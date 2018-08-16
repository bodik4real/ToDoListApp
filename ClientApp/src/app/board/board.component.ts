import { Component, OnInit } from '@angular/core';
import { BoardItemComponent } from './board-item/board-item.component';
import { Board } from '../models/Board';
import { UserDataService } from '../services/user-data.service';
import { BoardService } from '../services/board.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from '../models/auth/UserModel';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private currentUser: UserModel;
  public boards = new Array<Board>();

  public boardForm: FormGroup = new FormGroup({
    board: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  constructor(
    private userService: UserDataService,
    private boardService: BoardService) { }

  public ngOnInit() {
    this.currentUser = this.userService.getCachedUser();
    if (this.currentUser) {
      this.boardService.getAllBoards(this.currentUser.id).subscribe(res => {
        if (res.isSuccessful) {
          this.boards = res.result;
        }
      });
    }
  }

  public addBoard(boardName: string) {
    if (!this.boardForm.invalid) {
      if (this.currentUser) {
        const board = new Board(this.currentUser.id, boardName);
        this.boardService.saveBoard(board).subscribe(res => {
          if (res.isSuccessful) {
            this.boards.push(res.result);
          }
        });
        this.boardForm.reset();
      }
    }
  }

  public deleteBoard(boardId: string) {
    if(boardId)
    {
      this.boardService.deleteBoard(boardId).subscribe(res=>{
        if(res.isSuccessful)
        {
          const boardIndex = this.boards.findIndex(b=>b.id === boardId)
          this.boards.splice(boardIndex,1);          
        }
      });      
    }
  }
}
