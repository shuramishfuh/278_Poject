const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let replyEmailSchema = new Schema({
    _id:Schema.Types.ObjectId,
    replyMessage:{
        type:String,
        required:true
    }

    },
    {collection:"replies"});
exports.schema = replyEmailSchema;