/**
 * Created by Enzo on 6/12/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var room_schema;
room_schema = new Schema({
    username:{type:String,required:true},
    room: {type: String, required: true},
    time: {type: Date, default: Date.now},
    tipo: {type: String, required:true}
});

var Room = mongoose.model("rooms",room_schema);

module.exports.Room = Room;
