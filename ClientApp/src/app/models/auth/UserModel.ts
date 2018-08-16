
export class UserModel {
    public userName: string;
    public id: string;

    constructor(userName: string, id: string) {
        this.id = id;
        this.userName = userName;
    }
}
