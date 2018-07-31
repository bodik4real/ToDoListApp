export class User {
    public name: string;
    public surName: string;
    public password: string;
    public lastLogin: string;
    public tasks: string[];

    constructor(name: string, surName: string, password: string, lastLogin: string, tasks: string[]) {
        this.name = name;
        this.surName = surName;
        this.password = password;
        this.lastLogin = lastLogin;
        this.tasks = tasks;
    }
}

