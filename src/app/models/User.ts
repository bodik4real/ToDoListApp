export class User{
    name : string;
    surName : string;
    password: string;
    lastLogin: string;
    tasks: string[];


    constructor(name: string, surName: string, password: string, lastLogin: string, tasks: string[] )
    {
        this.name = name;
        this.surName = surName;
        this.password = password;
        this.lastLogin = lastLogin;
        this.tasks = tasks;
    }
}

