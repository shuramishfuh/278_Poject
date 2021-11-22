const port = process.env.PORT || 3000;
const express = require('express'),
    bodyParser = require("body-parser"),
    app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const {plantSchema, mongooseDB} = require("./mongoose/PlantSchema")

let db = mongooseDB.connection
//


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected");


    let itemStore = [`start`, 12];

    app.get(['/', `/item`], async function (req, res) {
        res.json(itemStore);
    });


    app.get('/item/:id', async function (req, res) {
        res.json(itemStore[req.params.id]);
    });


    app.post('/item', async function (req, res) {
        itemStore.push(req.body);
        res.json(req.body);
    });

    app.put('/item/:id', async function (req, res) {
        itemStore[req.params.id] = req.body
        res.json(req.body);
    });


    app.delete('/item/:id', async function (req, res) {
        itemStore.splice(req.params.id, 1)
        res.json(req.body);
    });


    app.listen(port, () => console.log(`live on ${port}`))

});