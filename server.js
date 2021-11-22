const port = process.env.PORT || 3000;
const express = require('express'),
    bodyParser = require("body-parser"),
    app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


let itemStore = [`start`, 12];

app.get(['/',`/item`], function (req, res) {
    res.json(itemStore);
});



app.get('/item/:id', function (req, res) {
    res.json(itemStore[req.params.id]);
});


app.post('/item', function (req, res) {
    itemStore.push(req.body);
    res.json(req.body);
});

app.put('/item/:id', function (req, res) {
    itemStore[req.params.id] = req.body
    res.json(req.body);
});


app.delete('/item/:id', function (req, res) {
    itemStore.splice(req.params.id, 1)
    res.json(req.body);
});


app.listen(port, () => console.log(`live on ${port}`))