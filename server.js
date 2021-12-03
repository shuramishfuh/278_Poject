const port = process.env.PORT || 3000,
    express = require('express'),
    multer = require('multer'),
    bodyParser = require("body-parser"),
    {mongooseDB} = require("./mongoose/mongooseDbconnect"),
    url = require("url"),
    path = require('path'),
    app = express();

app.use(bodyParser.json());
app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(__dirname + '/Public'));
app.use('/images', express.static('public'));



let db = mongooseDB.connection


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("DB check Success");

    // insert helper names and values
    require("./Helpers/helperInsertTypes")(mongooseDB)

// welcome
    app.get('/', async function (req, res) {
        res.json("welcome");
    });

    // routing
    require("./routes/emailRouter")(app, mongooseDB, url)
    require("./routes/helperRoute")(app, mongooseDB)
    require("./routes/plantRouter")(app, mongooseDB, url)
    require("./routes/plantImageUpload")(app, multer, path)
    require("./routes/plantAttributeImageUploadRoute")(app, multer, path)



    app.listen(port, () => console.log(`live on ${port}`))
});




