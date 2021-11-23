const cors = require("cors");
const express = require("express");
const app = express.Router(),
    {plantSchema} = require("../mongoose/PlantSchema"),
    {replyEmailSchema, inquireSchema} = require("../mongoose/inquirelSchema"),
    {mongooseDB} = require("../mongoose/mongooseDbconnect"),
    bodyParser = require("body-parser") ;

app.use(bodyParser.json());
let itemStore = [`start`, 12];

app.get(`/`, async function (req, res) {
    res.json(itemStore);
});


app.get('/plant/:id', cors(), async function (req, res) {
    res.json(itemStore[req.params.id]);
});


app.post('/plant', cors(), async function (req, res) {
    itemStore.push(req.body);
    res.json(req.body);
});

app.put('/plant/:id', cors(), async function (req, res) {
    itemStore[req.params.id] = req.body
    res.json(req.body);
});


app.delete('/plant/:id', cors(), async function (req, res) {
    itemStore.splice(req.params.id, 1)
    res.json(req.body);
});

module.exports = app;