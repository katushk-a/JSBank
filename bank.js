import { BankAccount, DebitAccount, CreditAccount } from './bankaccount.js';
import { Client } from './client.js';
import { Currency, getExchangeRates, convertintoUSD } from './currency.js';

class Bank {
    clients;

    constructor(clients) {
        this.clients = clients;
    }

    create() {
        let clientsblock = document.querySelector('.clients');
        for (let client of this.clients) {
            clientsblock.append(client.create());
        }
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
