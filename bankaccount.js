export class BankAccount {
    isActive;
    activeDate;
    cardExpireDate;
    currencyType;
    type;

    constructor(activeDate, expireDate, currency) {
        this.isActive = true;
        this.activeDate = activeDate;
        this.cardExpireDate = expireDate;
        this.currencyType = currency;
    }

    create() {
        let bankAccDiv = document.createElement('div');
        let bankHeading = document.createElement('h2');
        bankHeading.innerHTML = this.type == 'credit' ? 'Credit Account' : 'Debit Account';
        bankAccDiv.append(bankHeading);
        let active = document.createElement('p');
        active.innerHTML = this.isActive ? 'ACTIVE' : 'NOT ACTIVE';
        bankAccDiv.append(active);
        let activeDate = document.createElement('p');
        activeDate.innerHTML = this.activeDate;
        bankAccDiv.append(activeDate);
        let cardDate = document.createElement('p');
        cardDate.innerHTML = this.cardExpireDate;
        bankAccDiv.append(cardDate);
        let currency = document.createElement('p');
        currency.innerHTML = this.currencyType;
        bankAccDiv.append(currency);
        return bankAccDiv;
    }
}

export class DebitAccount extends BankAccount {
    currentBalance;

    constructor(activeDate, expireDate, currency, ballance) {
        super(activeDate, expireDate, currency);
        this.type = 'debit';
        this.currentBalance = ballance;
    }

    create() {
        let bankAccDiv = super.create();
        let ballance = document.createElement('p');
        ballance.innerHTML = this.currentBalance;
        bankAccDiv.append(ballance);
        return bankAccDiv;
    }
}

export class CreditAccount extends BankAccount {
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

    create() {
        let bankAccDiv = super.create();
        let ballance = document.createElement('p');
        ballance.innerHTML = this.personalFunds;
        bankAccDiv.append(ballance);
        let credit = document.createElement('p');
        credit.innerHTML = this.creditFunds;
        bankAccDiv.append(credit);
        let creditLimit = document.createElement('p');
        creditLimit.innerHTML = this.creditLimit;
        bankAccDiv.append(creditLimit);
        return bankAccDiv;
    }

}
