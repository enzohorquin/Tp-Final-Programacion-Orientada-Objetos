var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chat_schema;
chat_schema = new Schema({
    from: {type: String, required: true},
    time: {type: Date, default: Date.now},
    text: String,
    room: String
});

var Chat = mongoose.model("mensajes",chat_schema);

module.exports.Chat = Chat;