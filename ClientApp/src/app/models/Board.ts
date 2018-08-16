export class Board {
    public id: string;
    public userId: string;
    public name: string;

    constructor(userId: string, name: string) {
        this.userId = userId;
        this.name = name;
    }
}
