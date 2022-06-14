import data from '../data/data.json' assert { type: "json" };
var countryList = function () {
    var countries = [];
    data.map(function (item) {
        var obj = {
            country: item.name.en,
            country_code: {"2": item.iso3166.alpha2, "3": item.iso3166.alpha3},
        };
        countries.push(obj);
        return true;
    });
    return countries;
};
export default countryList;
