import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../models/Board';
import { ResponseModeExtended, ResponseModel } from '../models/ResponseModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Const from '../models/Const';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardUrl = Const.BaseUrl + '/board';

  constructor(private http: HttpClient) { }

  public getAllBoards(userId: string): Observable<ResponseModeExtended<Array<Board>>> {
    return this.http.get<ResponseModeExtended<Array<Board>>>(
      this.boardUrl + '/get-user-boards/' + userId);
  }

  public saveBoard(board: Board): Observable<ResponseModeExtended<Board>> {
    return this.http.post<ResponseModeExtended<Board>>(
      this.boardUrl + '/save', board);
  }

  public deleteBoard(boardId: string): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(
      this.boardUrl + '/delete/' + boardId);
  }
}
