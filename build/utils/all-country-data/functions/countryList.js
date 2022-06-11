import data from '../data/data.json' assert { type: 'json' }
var countryList = function () {
    var countries = [];
    data.map(function (item) {
        var obj = {
            country: item.name,
            country_code: item.country_code
        };
        countries.push(obj);
        return true;
    });
    return countries;
};
export default countryList;
