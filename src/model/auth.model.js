const mongoose = require('mongoose');

module.exports = {

    authModel: mongoose.model('authModel', new mongoose.Schema({
        name: {
            type: String,
            default: "Admin"
        },
        email: {
            type: String,
            required: true,
            min: 5,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 7,
        },
        resetToken: {
            type: String,
        },
        resetTokenExpiry: {
            type: Date,
        }

    }, {
        timestamps: true,
    }))
}