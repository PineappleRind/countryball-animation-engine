import data from '../data/data.json'
import Country from '../interfaces/Country'

const findCountryByCapital = (cap: string) => {
    if (cap === undefined) return {}
    cap = cap.toLowerCase()
    let d = <Country>{}
    let found = false
    let i = 0
    let numberOfCountries = data.length
    while (found !== true && i < numberOfCountries) {
        if ((data[i].capital)) if (data[i].capital!.toLowerCase() === cap) {
            found = true
            Object.assign(d, data[i])
        }
        i++
    }
    return d
}

export default findCountryByCapital