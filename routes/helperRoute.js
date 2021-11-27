const cors = require("cors");
const {helperSchema} = require("../mongoose/helperSchema");

module.exports = async function (app, mongooseDB) {
    let helper = mongooseDB.model("helpers", helperSchema);

    app.get(`/helper/water`, cors(), async function (req, res) {
        let help = await helper.find({name: "water"},{values:1,_id:0}) // only return values
        res.status(200).json(help)
    });

    app.get(`/helper/plantType`, cors(), async function (req, res) {
        let help = await helper.find({name: "plantType"},{values:1,_id:0});
        res.status(200).json(help)
    });

    app.get(`/helper/light`, cors(), async function (req, res) {
        let help = await helper.find({name: "light"},{values:1,_id:0});
        res.status(200).json(help)
    });

    app.get(`/helper/soil`, cors(), async function (req, res) {
        let help = await helper.find({name: "soil"},{values:1,_id:0});
        res.status(200).json(help)
    });

    app.get(`/helper/soilPH`, cors(), async function (req, res) {
        let help = await helper.find({name: "soilPH"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/yesOrNo`, cors(), async function (req, res) {
        let help = await helper.find({name: "yesOrNo"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/lifeCycle`, cors(), async function (req, res) {
        let help = await helper.find({name: "lifeCycle"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/outDoorUse`, cors(), async function (req, res) {
        let help = await helper.find({name: "outDoorUse"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/specialized`, cors(), async function (req, res) {
        let help = await helper.find({name: "specialized"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/nativeEnvironment`, cors(), async function (req, res) {
        let help = await helper.find({name: "nativeEnvironment"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/HumanUse`, cors(), async function (req, res) {
        let help = await helper.find({name: "HumanUse"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/building`, cors(), async function (req, res) {
        let help = await helper.find({name: "building"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/canopy_Shape`, cors(), async function (req, res) {
        let help = await helper.find({name: "canopy_Shape"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/timeToUltimateHeight`, cors(), async function (req, res) {
        let help = await helper.find({name: "timeToUltimateHeight"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/growthRate`, cors(), async function (req, res) {
        let help = await helper.find({name: "growthRate"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/persistence`, cors(), async function (req, res) {
        let help = await helper.find({name: "persistence"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/scent`, cors(), async function (req, res) {
        let help = await helper.find({name: "scent"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/season`, cors(), async function (req, res) {
        let help = await helper.find({name: "season"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/fruitType`, cors(), async function (req, res) {
        let help = await helper.find({name: "fruitType"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/trunkEstheticValue`, cors(), async function (req, res) {
        let help = await helper.find({name: "trunkEstheticValue"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/pruningRequirement`, cors(), async function (req, res) {
        let help = await helper.find({name: "pruningRequirement"},{values:1,_id:0});
        res.status(200).json(help)
    });
    app.get(`/helper/lifeSpan`, cors(), async function (req, res) {
        let help = await helper.find({name: "lifeSpan"},{values:1,_id:0});
        res.status(200).json(help)
    });


}