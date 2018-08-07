import { TaskItem } from './TaskItem';

export class User {
    public name: string;
    public password: string;
    public lastLogin: string;
    public tasks: Array<TaskItem>;

    constructor(name: string, password: string, lastLogin: string, tasks: Array<TaskItem>) {
        this.name = name;
        this.password = password;
        this.lastLogin = lastLogin;
        this.tasks = tasks;
    }
}

