const mongoose = require('mongoose');
const {replyEmailSchema }= require('./replyEmailSchema');
const Schema = mongoose.Schema;


let inquireSchema = new Schema({
    _Id: Schema.Types.ObjectId,
    inquireEmail: {
        type: String,
        required: true,
        min: 4,
    },
    inquireName: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    inquireTitle: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    inquireMessage: {
        type: String,
        required: true,
        min: 3,
    },
    emailViewed: {
        type:Schema.Types.Boolean,
        required:true
    },
    replies:[replyEmailSchema]
}, {collection: "inquire"});