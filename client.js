import { BankAccount, DebitAccount, CreditAccount } from './bankaccount.js';

export class Client {
    surname;
    name;
    isActive;
    registerDate;
    bankAccounts;

    constructor(name, surname, ...bankAccounts) {
        this.name = name;
        this.surname = surname;
        this.isActive = true;
        this.registerDate = new Date();
        this.bankAccounts = bankAccounts;
    }

    create() {
        let clientDiv = document.createElement('div');
        let nameSurname = document.createElement('p');
        nameSurname.innerHTML = this.name + ' ' + this.surname;
        clientDiv.append(nameSurname);
        let active = document.createElement('p');
        this.isActive ? active.innerHTML = 'ACTIVE' : active.innerHTML = 'NOT ACTIVE';
        clientDiv.append(active);
        let regdate = document.createElement('p');
        regdate.innerHTML = this.registerDate;
        clientDiv.append(regdate);
        for (let bankAccount of this.bankAccounts) {
            clientDiv.append(bankAccount.create());
        }
        return clientDiv;
    }
}
