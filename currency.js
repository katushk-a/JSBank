export class Currency {
    ccy;
    baseCcy = 'UAH';
    buyRate;
    saleRate;
    constructor(ccy, buyRate, saleRate) {
        this.ccy = ccy;
        this.buyRate = buyRate;
        this.saleRate = saleRate;
    }
}

export async function getExchangeRates() {
    let response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', {
        headers: {
            "Accept": "application/json"
        }
    });
    if (response.ok) {
        let jsonResponse = await response.json();
        let exchangeRates = [];
        for (let response of jsonResponse) {
            if (response.ccy != 'BTC') {
                let currency = new Currency(response.ccy, response.buy, response.sale);
                exchangeRates.push(currency);
            }
        }
        return exchangeRates;
    }
}

export async function convertintoUSD(money, currency) {
    if (currency == 'USD') return money;
    let exchangeRate = await getExchangeRates();
    if (currency == 'EUR') {
        money = money * exchangeRate[1].buyRate;
    }
    money = money / exchangeRate[0].buyRate;
    return money;
}