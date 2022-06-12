import data from '../data/data.json'
import Country from '../interfaces/Country'
const findByCountryCode = (code: string) => {
    if (!code) return {}
    let d = <Country>{}
    let found = false
    let i = 0
    while (found !== true && i < data.length) {
        if ((data[i].country_code).toLowerCase() === code) {
            found = true
            Object.assign(d, data[i])
        }
        i++
    }
    return d
}

export default findByCountryCode