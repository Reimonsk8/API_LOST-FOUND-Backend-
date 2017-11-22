var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemFoundSchema = new Schema({
	lat: {type:Number},
	lng: {type:Number},
	place: {type:String},
	date: {type:String},
	type: {type:String},
	contact: {type:String},
	description: {type:String},
	reward: {type:String}
});
module.exports = mongoose.model('itemFound',itemFoundSchema);
