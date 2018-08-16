import { BaseUserModel } from './BaseUserModel';

export class LoginUserModel extends BaseUserModel {
    constructor(email: string, password: string) {
        super(email, password);
    }
}
