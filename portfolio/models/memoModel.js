var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var memoSchema = new Schema({
	'title' : String,
	'contents' : String,
	'author' : String,
	'create_date' : Date,
	'delete_date' : Date
});

module.exports = mongoose.model('memo', memoSchema);
