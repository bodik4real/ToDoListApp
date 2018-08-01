<<<<<<< HEAD
import { TaskItem } from "./TaskItem";

=======
>>>>>>> 040d39e032c2b9c6e0d7a0c581526b311f8c97f5
export class User {
    public name: string;
    public surName: string;
    public password: string;
    public lastLogin: string;
<<<<<<< HEAD
    public tasks: Array<TaskItem>;

    constructor(name: string, surName: string, password: string, lastLogin: string, tasks: Array<TaskItem>) {
=======
    public tasks: string[];

    constructor(name: string, surName: string, password: string, lastLogin: string, tasks: string[]) {
>>>>>>> 040d39e032c2b9c6e0d7a0c581526b311f8c97f5
        this.name = name;
        this.surName = surName;
        this.password = password;
        this.lastLogin = lastLogin;
        this.tasks = tasks;
    }
}

