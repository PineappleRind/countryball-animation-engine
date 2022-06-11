import data from '../data/data.json';

const countryCurrencyList = () => {
    let currency: { country: string; currency: string | null; currency_code: string | null }[] = []
    data.map(item => {
        let obj = {
            country: item.name,
            currency: item.currency,
            currency_code: item.currency_code
        }
        currency.push(obj)
        return true
    })
    return currency
}

export default countryCurrencyList