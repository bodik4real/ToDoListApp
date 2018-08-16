import { Injectable } from '@angular/core';
import { TaskItem, TaskModel } from '../models/TaskItem';
import Const from '../models/Const';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { ResponseModeExtended, ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  private taskItemUrl = Const.BaseUrl + '/task';

  constructor(private http: HttpClient) { }

  public save(task: TaskItem): Observable<ResponseModeExtended<TaskItem>> {
    return this.http.post<ResponseModeExtended<TaskItem>>(
      this.taskItemUrl + '/add-task', new TaskModel(task.boardId, task.value));
  }

  public deleteTask(taskId: number): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(
      this.taskItemUrl + '/delete/' + taskId);
  }

  public editTask(editedTask: TaskItem): Observable<ResponseModeExtended<TaskItem>> {
    return this.http.put<ResponseModeExtended<TaskItem>>(
      this.taskItemUrl + '/update', editedTask);
  }

  public getTaskItemsByBoardId(boardId: string): Observable<ResponseModeExtended<Array<TaskItem>>> {
    return this.http.get<ResponseModeExtended<Array<TaskItem>>>(
      this.taskItemUrl + '/get-by-board-id/' + boardId);
  }
}
