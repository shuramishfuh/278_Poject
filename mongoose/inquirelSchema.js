const mongoose = require('mongoose');



    let replyEmailSchema = new mongoose.Schema({
        replyTo: String,
        date: {type: Date, default: Date.now()},
        Message: {
            type: String,
            required: true
        }

    });

    let inquireSchema = new mongoose.Schema({
        _Id: mongoose.Schema.Types.ObjectId,
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
            default: false
        },
        replies: [replyEmailSchema]
    });


//
// let email = mongoose.model("email",inquireSchema)
// let emailReply = mongoose.model("emailReply",replyEmailSchema)
//
// module.exports.emailModel = email;
// module.exports.replyEmailModel = emailReply;
module.exports.emailSchema = inquireSchema;
module.exports.replyEmailSchema = replyEmailSchema;

