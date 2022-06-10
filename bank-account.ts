

export class BankAccount{

    id:number;
    title:string;

    constructor(accountSettings:any) {
        this.id = accountSettings.id;
        this.title = accountSettings.title;
    }


}