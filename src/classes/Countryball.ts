import country from '../libraries/all-country-data'
import { CountryballOptions } from '../interfaces/CountryballOptions';
export default class Countryball {
    xy: number[] = [];
    hw: number[] = [];
    country: { name: any; flag: string; };
    constructor(options: CountryballOptions) {
        Object.assign(this, options);
        let searched = country.search(options.country);
        if (!searched || searched.length < 1) 
            throw new Error('Country not found');
        this.country = {
            name: searched[0].country,
            flag: country.countryFlag(searched[0].country)
        }
        return this;
    }
}
