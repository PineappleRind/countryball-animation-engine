import flags from '../data/flags/flags.json' assert { type: 'json' }
var flag = (function () {
    var flags_count = flags.length;
    return {
        get: function (country) {
            if (!country)
                return "";
            country = country.toLowerCase();
            var str = '';
            for (var i = 0; i < flags_count; i++) {
                if ((flags[i].name).toLowerCase() === country || (flags[i].country_code).toLowerCase() === country) {
                    str = flags[i].flag;
                    break;
                }
            }
            return str;
        },
        search: function (country) {
            var arr = [];
            country = country.toLowerCase();
            flags.forEach(function (obj) {
                var name = (obj.name).toLowerCase();
                var code = (obj.country_code).toLowerCase();
                if (name.includes(country) || code.includes(country)) {
                    arr.push(obj);
                }
            });
            return arr;
        }
    };
})();
export default flag;
