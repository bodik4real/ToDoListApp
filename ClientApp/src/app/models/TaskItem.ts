import * as moment from 'moment';

export class TaskItem {

    public id: number;
    public value: string;
    public createdDate = moment();

    constructor(id: number, value: string) {
        this.id = id;
        this.value = value;
    }
}
