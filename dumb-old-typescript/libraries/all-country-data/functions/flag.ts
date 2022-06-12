import flags from '../data/flags/flags.json'
import CountryFlag from '../interfaces/CountryFlag';
const flag = (function () {
    let flags_count = flags.length
    return {
        get: function (country: string) {
            if (!country) return ""
            country = country.toLowerCase()
            let str = ''
            for (let i = 0; i < flags_count; i++) {
                if ((flags[i].name).toLowerCase() === country || (flags[i].country_code).toLowerCase() === country) {
                    str = flags[i].flag
                    break
                }
            }
            return str
        },
        search: function (country: string) {
            let arr: CountryFlag[] = []
            country = country.toLowerCase()
            flags.forEach(function (obj) {
                let name = (obj.name).toLowerCase()
                let code = (obj.country_code).toLowerCase()
                if (name.includes(country) || code.includes(country)) {
                    arr.push(obj)
                }
            })
            return arr
        }
    }
})();
export default  flag