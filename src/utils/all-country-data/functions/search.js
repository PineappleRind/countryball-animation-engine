import data from '../data/data.json' assert { type: 'json' }
var search = function (string) {
    if (!string)
        return;
    var arr = [];
    data.map(function (item) {
        if (item.name.toLowerCase().indexOf(string.toLowerCase()) > -1) {
            arr.push(item);
        }
    });
    return arr;
};
export default search;
