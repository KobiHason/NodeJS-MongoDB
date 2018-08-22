var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({

firstName:  String,
lastName:  String,
email: { type: String, lowercase: true},
telephone: String,
 date : {type: Date, default: Date.now()}
});


module.exports = mongoose.model('User', UserSchema);
