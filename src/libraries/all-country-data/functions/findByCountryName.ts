import data from '../data/data.json'
import Country from '../interfaces/Country'

const findByCountryName = (name: string) => {
    if (name === undefined) return {}
    name = name.toLowerCase()
    let d = <Country>{}
    let found = false
    let i = 0
    while (found !== true && i < data.length) {
        if ((data[i].name).toLowerCase() === name) {
            found = true
            Object.assign(d, data[i])
        }
        i++
    }
    return d
}

export default findByCountryName