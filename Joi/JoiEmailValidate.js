const Joi = require('joi');

const JoiReplyEmail = Joi.object({
    messageReplyingTo: Joi.string()
        .min(3)
        .required(),
    replyMessage: Joi.string()
        .min(10)
        .required()
});

const JoiInquireSchema = Joi.object({
    inquireEmail: Joi.string()
        .min(4)
        .required(),
    replyMessage: Joi.string()
        .min(10)
        .required(),
    inquireName: Joi.string()
        .min(10)
        .required(),
    inquireTitle: Joi.string()
        .min(10)
        .required(),
    inquireMessage: Joi.string()
        .min(10)
        .required(),
});
exports.JoiReplyEmail =JoiReplyEmail;
exports.JoiInquireSchema = JoiInquireSchema;