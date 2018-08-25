var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'user_id' : String,
	'user_pw' : String,
	'user_name' : String,
	'user_image' : String,
	'user_email' : String,
	'permission' : String,
	'create_date' : Date,
	'delete_date' : Date
});

module.exports = mongoose.model('user', userSchema);
