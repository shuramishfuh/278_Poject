const port = process.env.PORT || 3000,
    express = require('express'),
    bodyParser = require("body-parser"),
    {mongooseDB} = require("./mongoose/mongooseDbconnect"),
    app = express();

app.use(bodyParser.json());
app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended: true}));


let db = mongooseDB.connection


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("DB check Success");

    app.get('/', async function (req, res) {
        res.json("welcome");
    });
    require("./routes/emailRouter")(app,mongooseDB)
    require("./routes/helperRoute")(app,mongooseDB)
    require("./routes/plantRouter")(app)

    app.listen(port, () => console.log(`live on ${port}`))
});




