import { BaseUserModel } from "./BaseUserModel";
import { TaskItem } from "../TaskItem";

export class UserRegistrationModel extends BaseUserModel {
    public userName: string

    constructor(email: string, password: string, userName: string) {

        super(email, password);
        this.userName = userName;
    }
}