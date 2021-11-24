const mongoose = require('mongoose');
const {flatten} = require("express/lib/utils");
const Schema = mongoose.Schema;

let replyEmailSchema = new Schema({
    _id: Schema.Types.ObjectId,
    messageReplyingTo: String,
    date: {type: Date, default: Date.now()},
    replyMessage: {
        type: String,
        required: true
    }

});

let inquireSchema = new Schema({
    _Id: Schema.Types.ObjectId,
    inquireEmail: {
        type: String,
        required: true,
        min: 4,
    },
    date: {type: Date, default: Date.now()},
    inquireName: {
        type: String,
        required: true,
        min: 3,
        max: 150
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
        type: Boolean,
       default:false
    },
    replies: [replyEmailSchema]
}, {collection: "inquire"});

exports.inquireSchema = inquireSchema;
exports.replyEmailSchema = replyEmailSchema;