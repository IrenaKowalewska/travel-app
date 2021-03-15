import React, { useEffect, useState } from 'react';
import { CurrencyItem } from './CurrencyItem';

function Currency({code, currencyName }) {
    const [currency, setCurrency] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/8ed0e057e6cb73e8e4e8f6b9/latest/${code}`)
                .then(res => res.json())
                .then(res => {
                    setCurrency(res.conversion_rates);
                    setLoading(false);
                })
    }, []);
    return <div>
    {
        loading ? 
        <h3 className="temp">Loading...</h3> 
        : <CurrencyItem 
            currency={currency}
            code={code}
            currencyName={currencyName}
        />
    }
</div>
}

export { Currency };