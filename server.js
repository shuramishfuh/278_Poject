const port = process.env.PORT || 3000;
const cors = require('cors');
const express = require('express'),
    bodyParser = require("body-parser"),
    app = express();
app.use(bodyParser.json());
app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended: true}));
const {plantSchema} = require("./mongoose/PlantSchema")
const {mongooseDB} = require("./mongoose/mongooseDbconnect")

let db = mongooseDB.connection



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("DB check Success");


    let itemStore = [`start`, 12];

    app.get(['/', `/item`], async function (req, res) {
        res.json(itemStore);
    });


    app.get('/item/:id', cors(), async function (req, res) {
        res.json(itemStore[req.params.id]);
    });


    app.post('/item',cors(), async function (req, res) {
        itemStore.push(req.body);
        res.json(req.body);
    });

    app.put('/item/:id', cors(),async function (req, res) {
        itemStore[req.params.id] = req.body
        res.json(req.body);
    });


    app.delete('/item/:id', cors(),async function (req, res) {
        itemStore.splice(req.params.id, 1)
        res.json(req.body);
    });


    app.listen(port, () => console.log(`live on ${port}`))

});