var mongoose = require('mongoose');
var Schema = mongoose.Schema;
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10;


var schemaUsuario = new Schema({
	nombre: String,
	user: { type: String, unique: true },
	contrasena: {type: String},
	tipo: Number
})

schemaUsuario.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('contrasena')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the contrasena using our new salt
        bcrypt.hash(user.contrasena, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext contrasena with the hashed one
            user.contrasena = hash;
            next();
        });
    });
});



schemaUsuario.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.contrasena, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
var Usuario = mongoose.model("usuario", schemaUsuario);



module.exports.Usuario = Usuario;