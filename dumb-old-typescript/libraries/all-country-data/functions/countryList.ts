import data from '../data/data.json'

const countryList = () => {
    let countries: { country: string; country_code: string }[] = []
    data.map((item) => {
        let obj = {
            country: item.name,
            country_code: item.country_code
        }
        countries.push(obj)
        return true
    })
    return countries
}

export default countryList