const {helperSchema} = require("../mongoose/helperSchema");
module.exports = async function (mongooseDB) {


    let helper = mongooseDB.model("helper", helperSchema)
    helper.collection.stats(async function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        if (results.count === 0) {

            await helper.insertMany([
                {name: "water", values: ["high", "moderate", "low"]},
                {
                    name: "plantType",
                    values: ["Cactus/Succulent", "Ground_cover", "Lawn", "Palm", "Shrub", "Tree", "Vine"]
                },
                {name: "light", values: ["Full", "part", "shade"]},
                {name: "soil", values: ["clay", "sand", "loam"]},
                {name: "soilPH", values: ["Acidic(pH<7)", "Neutral(ph=7)", "Alkaline(pH>7)"]},
                {name: "yesOrNo", values: ["yes", "no"]},
                {name: "lifeCycle", values: ["Annual", "Perennial", "Biennial"]},
                {
                    name: "outDoorUse",
                    values: ["screen", "mass planting", "Hedge", "specimen", "Border plant", "street"]
                },
                {name: "specialized", values: ["topiary", "indoor", "bonsai", "container", "espalier", "sport field"]},
                {
                    name: "nativeEnvironment",
                    values: ["shade", "windbreak", "erosion control", "pollution Tolerant/Urban", "reclamation", "wildlife", "native to lebanon"]
                },
                {name: "HumanUse", values: ["edible", "medicinal", "cut flower / arrangement"]},
                {name: "building", values: ["intensive", "extensive", "facade", "green roof"]},
                {
                    name: "canopy_Shape",
                    values: ["weeping", "upright/erect", "vase", "pyramidal", "rounded", "columnar", "oval", "palm", "spreading"]
                },
                {
                    name: "timeToUltimateHeight",
                    values: ["0-1(years)", "1-2(years)", "2-5(years)", "5-10(years)", "10-20(years)", "20-50(years)", ">50(years)"]
                },
                {name: "growthRate", values: ["slow", "moderate", "fast"]},
                {name: "persistence", values: ["evergreen", "semi evergreen", "deciduous"]},
                {name: "scent", values: ["evergreen", "semi evergreen", "deciduous"]},
                {name: "season", values: ["spring", "winter", "summer", "year round", "fall"]},
                {name: "fruitType", values: ["dry", "fleshy"]},
                {
                    name: "trunkEstheticValue",
                    values: ["showy", "not showy", "smooth texture", "intermediate texture", "roughTexture", "deeply fissured", "papery", "spines", "colored"]
                },
                {name: "pruningRequirement", values: ["needed", "little needed", "none"]},
                {name: "lifeSpan", values: ["<25(years)", "25-50(years)", ">50(years)"]},
            ])
                .then(function () {
                    console.log("Data inserted")
                }).catch(function (error) {
                    console.log(error)
                });

        }
    });

}