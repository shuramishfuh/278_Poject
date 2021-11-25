const cors = require("cors"),
    Emails = require("../mongoose/inquirelSchema"),
    nodemailer = require('nodemailer');

module.exports = function (app, mongooseDB) {
    let Email = mongooseDB.model("Email", Emails.emailSchema);
    let reply = mongooseDB.model("reply", Emails.replyEmailSchema);
    app.get(`/email`, async function (req, res) {
        let emails = await Email.find({});
        res.json(emails);
    });

    app.get('/email/find', cors(), async function (req, res) {
        let emails = await Email.find({_id: req.body.id});
        res.json(emails);
    });

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

    app.post('/email/reply', cors(), async function (req, res) {

        let replyEmail = new reply({ // reply
            replyTo: req.body.id,
            Message: req.body.message,
        });
        try {
            replyEmail.validate();
            let email = await Email.find({_id: req.body.id});

            let mailOptions = {
                from: 'javonte.mcglynn79@ethereal.email',
                to: Object.values(email)[0].get("inquireEmail"),
                subject: Object.values(email)[0].get("inquireTitle"),
                text: Object.values(email)[0].get("inquireMessage")
            };
            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: 'javonte.mcglynn79@ethereal.email',
                    pass: '2Qry2mwfB6v58tmFMG'
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