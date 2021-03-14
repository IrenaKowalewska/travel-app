const CurrencyItem = ({currency, code, currencyName}) => {
    console.log(currency.USD, code, currencyName);
    return <div>
        <p className="currency-text">1 {currencyName.toUpperCase()} ({code})</p>
        <p className="currency-text"> {currency.USD} USD</p>
        <p className="currency-text"> {currency.EUR === 1 ? "" : currency.EUR} {currency.EUR === 1 ? "" : "EUR"}</p>
    </div>
}

export { CurrencyItem };