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
}