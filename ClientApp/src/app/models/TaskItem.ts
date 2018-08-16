import * as moment from 'moment';

export class TaskItem {

    public id: number;
    public value: string;
    public createdDate = moment();
    public boardId: string;

    constructor(boardId: string, value: string) {
        this.boardId = boardId;
        this.value = value;
    }
}

export class TaskModel {
    public id: number;
    public value: string;
    public createdDate = moment();
    public boardId: string;

    constructor(boardId: string, value: string) {
        this.boardId = boardId;
        this.value = value;
    }
  }
