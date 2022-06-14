import data from '../data/data.json' assert { type: "json" };
var search = function (string, lang) {
    if (!string) return;
    if (!lang) lang = "en";
    var arr = [];
    for (const item in data) {
        if (data[item].name[lang].toLowerCase().includes(string.toLowerCase())
            || data[item].iso3166.alpha2.toLowerCase().includes(string.toLowerCase())
            || data[item].iso3166.alpha3.toLowerCase().includes(string.toLowerCase())) {
            arr.push(data[item]);
        }
    }
    return arr;
};
export default search;
