import data from '../data/data.json' assert { type: 'json' }
var search = function (string) {
    if (!string)
        return;
    var arr = [];
    data.map(function (item) {
        for (var key in item) {
            if (typeof item[key] === 'string' && item[key].toLowerCase().indexOf(string.toLowerCase()) > -1 && key !== 'currency') {
                arr.push(item);
                return true;
            }
        }
    });
    return arr;
};
export default search;
