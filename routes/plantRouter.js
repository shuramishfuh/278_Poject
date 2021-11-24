const cors = require("cors");
const
    {plantSchema} = require("../mongoose/PlantSchema"),
    {replyEmailSchema, inquireSchema} = require("../mongoose/inquirelSchema"),
    {mongooseDB} = require("../mongoose/mongooseDbconnect");

let itemStore = [`start`, 12];


module.exports = function (app) {
    app.get(`/plant`, async function (req, res) {
        res.json("welcome to plants");
    });


    app.get('/plant/:id', cors(), async function (req, res) {
        res.json(itemStore[req.params.id]);
    });


    app.post('/plant', cors(), async function (req, res) {
        itemStore.push(req.body);
        res.status(200).json("this is Plant post");
    });

    app.put('/plant/:id', cors, async function (req, res) {
        itemStore[req.params.id] = req.body
        // res.json(req.body);
        res.json("Plant delete");
    });


    app.delete('/plant/:id', async function (req, res) {
        itemStore.splice(req.params.id, 1)
        res.json(req.body);
    });

}