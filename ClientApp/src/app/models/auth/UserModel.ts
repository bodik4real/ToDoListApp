import { BaseUserModel } from "./BaseUserModel";
import { TaskItem } from "../TaskItem";

export class UserModel extends BaseUserModel {
    public userName: string;
    public tasks: Array<TaskItem>;

    constructor(email: string, password: string, userName: string) {
        super(email, password);
        this.tasks = new Array<TaskItem>();
        this.userName = userName;
    }
}