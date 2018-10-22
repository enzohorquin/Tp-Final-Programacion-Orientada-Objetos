var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/juego");

var password_validation = {
    validator: function(p){
        return this.password_confirmation == p;
    }, message: "Las contraseñas no son iguales"
}

var user_schema = new Schema({
    name: String,
    username: {type: String, required: true, maxlenght:[50,"User name muy grande"]},
    password: {type: String, required: true, minlenght:[8,"Minimo 8 caracteres"], validate: password_validation},
    age: Number,
    email: {type: String, required: "El correo es obligatorio"}
});

user_schema.virtual("password_confirmation").get(function(){
    return this.p_c;
}).set(function(password){this.p_c = password;});


var User = mongoose.model("User",user_schema);

module.exports.User = User;