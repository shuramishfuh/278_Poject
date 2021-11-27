const cors = require("cors");


// variables

const water = ["high", "moderate", "low"],
    plantType = ["Cactus/Succulent", "Ground_cover", "Lawn", "Palm", "Shrub", "Tree", "Vine"],
    light = ["Full", "part", "shade"],
    soil = ["clay", "sand", "loam"],
    soilPH = ["Acidic(pH<7)", "Neutral(ph=7)", "Alkaline(pH>7)"],
    yesOrNo = ["yes", "no"],
    lifeCycle = ["Annual", "Perennial", "Biennial"],
    outDoorUse = ["screen", "mass planting", "Hedge", "specimen", "Border plant", "street"],
    specialized = ["topiary", "indoor", "bonsai", "container", "espalier", "sport field"],
    nativeEnvironment = ["shade", "windbreak", "erosion control", "pollution Tolerant/Urban", "reclamation", "wildlife", "native to lebanon"],
    HumanUse = ["edible", "medicinal", "cut flower / arrangement"],
    building = ["intensive", "extensive", "facade", "green roof"],
    canopy_Shape = ["weeping", "upright/erect", "vase", "pyramidal", "rounded", "columnar", "oval", "palm", "spreading"],
    timeToUltimateHeight = ["0-1(years)", "1-2(years)", "2-5(years)", "5-10(years)", "10-20(years)", "20-50(years)", ">50(years)"],
    growthRate = ["slow", "moderate", "fast"],
    persistence = ["evergreen", "semi evergreen", "deciduous"],
    scent = ["evergreen", "semi evergreen", "deciduous"],
    season = ["spring", "winter", "summer", "year round", "fall"],
    fruitType = ["dry", "fleshy"],
    trunkEstheticValue = ["showy", "not showy", "smooth texture", "intermediate texture", "roughTexture", "deeply fissured", "papery", "spines", "colored"],
    pruningRequirement = ["needed", "little needed", "none"],
    lifeSpan = ["<25(years)", "25-50(years)", ">50(years)"];


module.exports = function (app, mongooseDB) {

    app.get(`/helper/water`, async function (req, res) {
        res.status(200).json(water)
    });

    app.get(`/helper/plantType`, async function (req, res) {
        res.status(200).json(plantType)
    });

    app.get(`/helper/light`, async function (req, res) {
        res.status(200).json(light)
    });
    app.get(`/helper/soil`, async function (req, res) {
        res.status(200).json(soil)
    });
    app.get(`/helper/soil`, async function (req, res) {
        res.status(200).json(soil)
    });
    app.get(`/helper/soilPH`, async function (req, res) {
        res.status(200).json(soilPH)
    });
    app.get(`/helper/yesOrNo`, async function (req, res) {
        res.status(200).json(yesOrNo)
    });
    app.get(`/helper/lifeCycle`, async function (req, res) {
        res.status(200).json(lifeCycle)
    });
    app.get(`/helper/outDoorUse`, async function (req, res) {
        res.status(200).json(outDoorUse)
    });
    app.get(`/helper/specialized`, async function (req, res) {
        res.status(200).json(specialized)
    });
    app.get(`/helper/nativeEnvironment`, async function (req, res) {
        res.status(200).json(nativeEnvironment)
    });
    app.get(`/helper/HumanUse`, async function (req, res) {
        res.status(200).json(HumanUse)
    });
    app.get(`/helper/building`, async function (req, res) {
        res.status(200).json(building)
    });
    app.get(`/helper/canopy_Shape`, async function (req, res) {
        res.status(200).json(canopy_Shape)
    });
    app.get(`/helper/timeToUltimateHeight`, async function (req, res) {
        res.status(200).json(timeToUltimateHeight)
    });
    app.get(`/helper/growthRate`, async function (req, res) {
        res.status(200).json(growthRate)
    });
    app.get(`/helper/persistence`, async function (req, res) {
        res.status(200).json(persistence)
    });
    app.get(`/helper/scent`, async function (req, res) {
        res.status(200).json(scent)
    });
    app.get(`/helper/season`, async function (req, res) {
        res.status(200).json(season)
    });
    app.get(`/helper/fruitType`, async function (req, res) {
        res.status(200).json(fruitType)
    });
    app.get(`/helper/trunkEstheticValue`, async function (req, res) {
        res.status(200).json(trunkEstheticValue)
    });
    app.get(`/helper/pruningRequirement`, async function (req, res) {
        res.status(200).json(pruningRequirement)
    });
    app.get(`/helper/lifeSpan`, async function (req, res) {
        res.status(200).json(lifeSpan)
    });


}