const cors = require("cors");
const express = require("express");
const app = express.Router(),
    {replyEmailSchema, inquireSchema} = require("../mongoose/inquirelSchema"),
    {mongooseDB} = require("../mongoose/mongooseDbconnect"),
    bodyParser = require("body-parser") ;

app.use(bodyParser.json());
let itemStore = [`email`, 12];

app.get(`/`, async function (req, res) {
    res.json("welcome to email");
});


app.get('/email/:id', cors(), async function (req, res) {
    res.json(itemStore[req.params.id]);
});


app.post('/email', cors(), async function (req, res) {
    itemStore.push(req.body);
    res.json(req.body);
});


app.delete('/plant/:id', cors(), async function (req, res) {
    itemStore.splice(req.params.id, 1)
    res.json(req.body);
});

module.exports = app;