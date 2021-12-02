const cors = require("cors"),
    Emails = require("../mongoose/inquirelSchema"),
    nodemailer = require('nodemailer');
const url = require("url");

module.exports = function (app, mongooseDB,Url) {
    let Email = mongooseDB.model("Email", Emails.emailSchema);
    let reply = mongooseDB.model("reply", Emails.replyEmailSchema);

    // get all emails
    app.get(`/email`, async function (req, res) {
        let emails = await Email.find({});
        res.json(emails);
    });

    // find email by id
    app.get(`/email/find`, async function (req, res) {
        const queryObject = url.parse(req.url, true).query;
        if (queryObject.id === undefined) {
            return res.status(400).json();
            res.end;
        } else {
            let email = await Email.find({_id: queryObject.id});

            res.json(email);
            res.end;
        }

    });

    // create email
    app.post('/email', cors(), async function (req, res) {

        let userId;
        let email = new Email({
            inquireEmail: req.body.email,
            inquireName: req.body.name,
            inquireTitle: req.body.title,
            inquireMessage: req.body.message,
        });
        try {
            await email.validate();
            userId = await email.save();
        } catch (err) {
            res.status(400).send(err.message);
            res.end;
        }


        res.status(200).json(userId);
    });

    // create reply to email and send
    app.post('/email/reply', cors(), async function (req, res) {

        let replyEmail = new reply({ // reply
            replyTo: req.body.id,
            Message: req.body.message,
        });
        try {
            replyEmail.validate();
            let email = await Email.find({_id: req.body.id});

            let mailOptions = {
                from: '278projectplant@gmail.com',
                to: Object.values(email)[0].get("inquireEmail"),
                subject: Object.values(email)[0].get("inquireTitle"),
                html: "<h3 style='align-content: center; color: cadetblue'> 278ProjectPlant</h3><hr>" +
                    " <h5 style='color: black'>" + req.body.message + "</h5>"
                    + "<br>"
                    + "<hr>"
                    + " <h5 style='color: indigo; font-weight: bold '>Thanks for reaching out</h5>  " +
                    " <h5 style='color: goldenrod; font-weight: bold '>278ProjectPlant</h5>  " +
                    "<h5>(c)opyright 2021 -2025</h5>"
            };
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: '278projectplant@gmail.com',
                    pass: '1qa2ws3ed!@#'
                }
            });

            await transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            let result = await Email.findByIdAndUpdate(req.body.id,
                {
                    "$push": {"replies": replyEmail},
                    "$set": {"emailViewed": true}
                },
                {"new": true, "upsert": true},
            )
            res.status(200).json(result);
            res.end;


        } catch (err) {
            res.status(400).send(err.message);
            res.end;
        }

    });
    // delete email and replies
    app.delete('/email', cors(), async function (req, res) {
        try {
            const result = await Email.findByIdAndDelete(req.body.id);
            if (result) {
                res.status(200).json(result);
                res.end;
            } else {
                res.status(400);
                res.end;
            }
        } catch (err) {
            res.status(400).send(err.message);
            res.end;
        }
    });
}