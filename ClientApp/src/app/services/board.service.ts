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

  constructor(private http: HttpClient) { }

  public getAllBoards(userId: string): Observable<ResponseModeExtended<Array<Board>>> {
    return this.http.get<ResponseModeExtended<Array<Board>>>(
      Const.BaseUrl + '/board/user-boards/' + userId);
  }

  public saveBoard(board: Board): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(
      Const.BaseUrl + '/board/save', board);
  }
}
