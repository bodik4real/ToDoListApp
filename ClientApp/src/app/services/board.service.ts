import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  public getAllBoards(userId: string): Observable<ResponseModeExtended<Array<Board>>> {
    return this.http.get<ResponseModeExtended<Array<Board>>>(this._userBoardUrl + "/" + userId, { 'headers': this.headers });
  }
}
