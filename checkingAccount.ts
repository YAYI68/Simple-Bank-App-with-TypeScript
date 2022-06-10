import { BankAccount } from "./bank-account";

export class CheckingAccount extends BankAccount {

    private _balance = 0;

    constructor(account:any){
        super(account);
    }
   

    get balance(){
        return this._balance;
    }

    set balance(val:number){
        this._balance = val;
    }

    deposit(amount:number){
        this.balance += amount;
    }

    withdrawal(amount:number){
        this.balance += amount;
    }

}