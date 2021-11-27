const {Schema} = require("mongoose");

module.exports.helperSchema = new Schema(
{
        name: {required: true, type: String},
        values: {required: true, type: [String]}
    })