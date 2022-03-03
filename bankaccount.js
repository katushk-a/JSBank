export class BankAccount {
    isActive;
    activeDate;
    cardExpireDate;
    currencyType;

    constructor(activeDate, expireDate, currency) {
        this.isActive = true;
        this.activeDate = activeDate;
        this.cardExpireDate = expireDate;
        this.currencyType = currency;
    }
}

export class DebitAccount extends BankAccount {
    type;
    currentBalance;

    constructor(activeDate, expireDate, currency, ballance) {
        super(activeDate, expireDate, currency);
        this.type = 'debit';
        this.currentBalance = ballance;
    }
}

export class CreditAccount extends BankAccount {
    type;
    personalFunds;
    creditFunds;
    creditLimit;

    constructor(activeDate, expireDate, currency, personalFund, creditFund, creditLimit) {
        super(activeDate, expireDate, currency);
        this.type = 'credit';
        this.personalFunds = personalFund;
        this.creditFunds = creditFund;
        this.creditLimit = creditLimit;
    }
}