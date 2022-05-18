const mongoose = require('mongoose');

module.exports = {

    foodModel: mongoose.model('food', new mongoose.Schema({

        name: {
            type: String,
            required: true,
        },
        tribe: {
            type: String,
            default: "N/A"
        },
        image: {
            type: String,
        },
        text: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        step: {
            type: String,
        },
        time: {
            type:String,
        },
        level: {
            type: String,
        },
        cloudinaryId: String,
    }))

}