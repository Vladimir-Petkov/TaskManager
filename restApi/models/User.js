const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        unique: true,
        required: true
    },

    password: {
        type: mongoose.Schema.Types.String,
        require: true
    },
});

userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }
};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = new mongoose.model('User', userSchema);