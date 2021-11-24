const cors = require("cors"),
    // {replyEmailSchema, inquireSchema} = require("../mongoose/inquirelSchema"),
    {mongooseDB} = require("../mongoose/mongooseDbconnect"),
    {JoiInquireSchema, JoiReplyEmail} = require("../Joi/JoiEmailValidate");


let itemStore = [`email`, 12];


module.exports = function (app) {
    app.get(`/email`, async function (req, res) {
        res.json("welcome to email");
    });


    app.get('/email/:id', cors(), async function (req, res) {
        res.json(req.params.id);
    });


    app.post('/email', cors(), async function (req, res) {
        // res.json(req.body);
        res.send("post");
    });


    app.delete('/email/:id', cors(), async function (req, res) {
        itemStore.splice(req.params.id, 1)
        res.json(req.body);
    });
}