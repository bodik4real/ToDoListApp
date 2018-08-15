import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Board } from '../models/Board';
import { ResponseModeExtended } from '../models/ResponseModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private baseUrl: string = 'https://localhost:44326/api/board';

  private _userBoardUrl = this.baseUrl + '/userBoards';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public getAllBoards(userId: string): Observable<ResponseModeExtended<Board>> {
    return this.http.get<ResponseModeExtended<Board>>(this._userBoardUrl + "/" + userId, { 'headers': this.headers });
  }
}
