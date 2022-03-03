import { BankAccount, DebitAccount, CreditAccount } from './bankaccount.js';
import { Client } from './client.js';
import { Currency, getExchangeRates, convertintoUSD } from './currency.js';

class Bank {
    clients;

    constructor(clients) {
        this.clients = clients;
    }

    async calculateAllMoneyOwing() {
        let owingMoney = 0;
        for (let client of this.clients) {
            for (let bankaccount of client.bankAccounts) {
                if (bankaccount.type === 'credit') owingMoney += await convertintoUSD(bankaccount.personalFunds, bankaccount.currencyType);
                else owingMoney += await convertintoUSD(bankaccount.currentBalance, bankaccount.currencyType);
            }
        }
        return owingMoney;
    }

    async unactiveClientsCredit() {
        let owingMoney = 0;
        for (let client of this.clients) {
            if (!client.isActive) {
                for (let bankaccount of client.bankAccounts) {
                    if (bankaccount.type === 'credit') {
                        owingMoney += await convertintoUSD(bankaccount.creditFunds, bankaccount.currencyType);
                    }
                }
            }
        }
        return owingMoney;
    }

    async activeClientsCredit() {
        let owingMoney = 0;
        for (let client of this.clients) {
            if (client.isActive) {
                for (let bankaccount of client.bankAccounts) {
                    if (bankaccount.type === 'credit') {
                        owingMoney += await convertintoUSD(bankaccount.creditFunds, bankaccount.currencyType);
                    }
                }
            }
        }
        return owingMoney;
    }

    async calculateMoneyInBank() {
        let money = 0;
        for (let client of this.clients) {
            for (let bankAccount of client.bankAccounts) {
                if (bankAccount.type === 'credit') {
                    money += await convertintoUSD(bankAccount.personalFunds, bankAccount.currencyType);
                    money += await convertintoUSD(bankAccount.creditLimit, bankAccount.currencyType);
                } else {
                    money += await convertintoUSD(bankAccount.currentBalance, bankAccount.currencyType);
                }
            }
        }
        return money;
    }
}




let bank = new Bank([
    new Client('Oleksii', 'Biriukov', new DebitAccount('ll', 'kkk', 'USD', 100000), new CreditAccount('dd', 'dd', 'USD', 100000, 0, 100000)),
    new Client('Oleksii', 'Biriukov', new DebitAccount('ll', 'kkk', 'USD', 100000), new CreditAccount('dd', 'dd', 'USD', 100000, 0, 100000)),
]);

//console.log(bank);
console.log(bank.calculateMoneyInBank());