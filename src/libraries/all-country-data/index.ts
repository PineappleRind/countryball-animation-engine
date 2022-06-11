import countryList from './functions/countryList'
import countryCurrencyList from './functions/countryCurrencyList'
import countryIsdCodeList from './functions/countryIsdCodeList'
import countryCapitalList from './functions/countryCapitalList'
import countryLanguageList from './functions/countryLanguageList'
import all from './functions/all'
import findByCountryName from './functions/findByCountryName'
import findByCountryCode from './functions/findByCountryCode'
import findByCountryISD from './functions/findByCountryISD'
import search from './functions/search'
import searchByLanguage from './functions/searchByLanguage'
import count from './functions/count'
import findCountryByCapital from './functions/findCountryByCapital'
import flag from './functions/flag'

const countries = {
    countryList, countryCurrencyList, countryIsdCodeList, countryCapitalList,
    countryLanguageList, all, count,
    findCountryByCapital: (cap: string) => findCountryByCapital( cap ),
    findByCountryName: (name: string) => findByCountryName(name),
    findByCountryCode: (code: string) => findByCountryCode( code ),
    findByCountryISD: (isd: string) => findByCountryISD( isd ),
    search: (str: any) => search( str ),

    searchByLanguage: (str: any) => searchByLanguage( str ),
    countryFlag: (str: any) => flag.get(str),
    searchFlag: (str: any) => flag.search(str)
}

export default countries