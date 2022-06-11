import countryList from './functions/countryList.js';
import all from './functions/all.js';
import search from './functions/search.js';
import flag from './functions/flag.js';
var countries = {
    countryList: countryList,
    all: all,
    search: function (str) { return search(str); },
    countryFlag: function (str) { return flag.get(str); },
    searchFlag: function (str) { return flag.search(str); }
};
export default countries;
