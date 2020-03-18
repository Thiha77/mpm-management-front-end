const validate = require('validate.js');
const moment = require('moment');
validate.extend(validate.validators.datetime,{
    parse: function(value, options){
        return +moment.utc(value);
    },
    format: function(value, options){
        var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
        return moment.utc(value).format(format);
    }
});

module.exports = {
    validate
}