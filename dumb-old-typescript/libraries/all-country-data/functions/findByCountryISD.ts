import data from '../data/data.json'
import Country from '../interfaces/Country'
const findByCountryISD = (isd: string) => {
    if (!isd) return {}
    let d = <Country>{}
    let found = false
    let i = 0
    while (found === false && i < data.length) {

        let arr = data[i].isd
        arr.map((item: string) => {
            if (item === isd) {
                found = true
                Object.assign(d, data[i])
            }
        })
        i++
    }
    return d

}

export default findByCountryISD