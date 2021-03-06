const cors = require("cors"),
    PlantSchema = require("../mongoose/PlantSchema");

module.exports = function (app, mongooseDB, Url, multer) {
    let Plant = mongooseDB.model("Plant", PlantSchema.plantSchema);


    // return all about all plants
    app.get(`/plant`, async function (req, res) {
        const {page = 1, limit = 10} = req.query;
        let plants = await Plant.find({})
            .limit(limit * 1)
            .skip((page - 1) * limit);
        res.json(plants);
    });

    // get short info of plants
    app.get(`/plant/short`, async function (req, res) {
        const {page = 1, limit = 10} = req.query;
        let plants = await Plant.find({}, {
            _id: 1,
            basicInfo: 1,
            use: 1,
            management: 1
        })
            .limit(limit * 1)
            .skip((page - 1) * limit)
        res.json(plants);
    });


    // get plant by ID
    app.get(`/plant/find/id`, async function (req, res) {
        const queryObject = Url.parse(req.url, true).query;
        if (queryObject.id === undefined) {
            return res.status(400).json();
            res.end;
        } else {
            let plants = await Plant.find({_id: queryObject.id});
            if (plants === undefined) {
                res.status(200).json(plants);
                res.end;
            } else {
                res.status(404).json(plants);
                res.end;
            }

        }

    });

// search plants
    app.post('/plant/find', cors(), async function (req, res) {

        let result;
        let search = "{";
        for (let key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                let value = req.body[key];
                search += `"${key}" : "${value}",`
            }
        }
        search = search.slice(0, search.length - 1);
        search += "}"
        search = JSON.parse(search)
        result = await Plant.find(search);

        if (result.length !== 0) res.status(200).json(result);
        else res.status(404).json(result);


    });

// update plant
    app.put(`/plant`, async function (req, res) {
        try {
            // create new object then delete prior

            let ReturnPlantId;
            let plant = createPlant(req)
            await plant.validate();
            await Plant.findByIdAndDelete(req.body.id);
            await plant.save();
            res.status(204).json();
            res.end;
        } catch (err) {
            res.status(400).send(err.message);
            res.end;
        }
    });

// create new plant
    app.post('/plant', cors(), async function (req, res) {

        let plantId;
        let plant = createPlant(req);

        try {
            await plant.validate();
            plantId = await plant.save();
        } catch (err) {
            res.status(400).send(err.message);
            res.end;
        }
        res.status(201).json(plantId);
    });

// delete plant
    app.delete('/plant', cors(), async function (req, res) {
        try {
            const result = await Plant.findByIdAndDelete(req.body.id);
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

// create new plant from request
    function createPlant(req) {
        return new Plant({
            basicInfo: {
                annualTemperature: req.body.basicInfo.annualTemperature,
                HeatZones: req.body.basicInfo.HeatZones,
                HardinessZones: req.body.basicInfo.HardinessZones,
                origin: req.body.basicInfo.origin,
                imgSrc: req.body.basicInfo.imgSrc,
                description: req.body.basicInfo.description,
                Pronounciation: req.body.basicInfo.Pronounciation,
                scientific_name: req.body.basicInfo.scientific_name,
                common_name: req.body.basicInfo.common_name,
                CommonArabicName: req.body.basicInfo.CommonArabicName,
                CommonFrenchName: req.body.basicInfo.CommonFrenchName,
                type: req.body.basicInfo.type,
                light: req.body.basicInfo.light,
                soilPH: req.body.basicInfo.soilPH,
                soil: req.body.basicInfo.soil,
                water: req.body.basicInfo.water,
                Tolerance: {
                    Heat: req.body.basicInfo.Tolerance.Heat,
                    Drought: req.body.basicInfo.Tolerance.Drought,
                    Frost: req.body.basicInfo.Tolerance.Frost,
                    salt: req.body.basicInfo.Tolerance.salt,
                },
                lifeCycle: req.body.basicInfo.lifeCycle,
            },


            use: {
                outdoor: req.body.use.outdoor,
                specialized: req.body.use.specialized,
                nativeEnvironment: req.body.use.nativeEnvironment,
                humanUse: req.body.use.humanUse,
                building: req.body.use.building,
            },
            shapeSize: {
                size: req.body.shapeSize.size,
                canopy_Shape: req.body.shapeSize.canopy_Shape,
                PlantHeight: req.body.shapeSize.PlantHeight,
                spread: req.body.shapeSize.spread,
                timeTOUltimateHeight: req.body.shapeSize.timeTOUltimateHeight,
                growthRate: req.body.shapeSize.growthRate,
            },
            margins: req.body.margins,
            Venation: req.body.Venation,
            leaf: {
                color_in_Growing_Season: req.body.leaf.color_in_Growing_Season,
                color_in_changing_Season: req.body.leaf.color_in_changing_Season,
                persistence: req.body.leaf.persistence,
                scent: req.body.leaf.scent,
            },
            flower: {
                color: req.body.flower.color,
                scent: req.body.flower.scent,
                Blade_Length: req.body.flower.Blade_Length,
                season: req.body.flower.season,
                showiness: req.body.flower.showiness,
                flower_img: req.body.flower.flower_img,
            },
            fruit: {
                color: req.body.fruit.color,
                size: req.body.fruit.size,
                season: req.body.fruit.season,
                showiness: req.body.fruit.showiness,
                type: req.body.fruit.type,
            },
            trunk: req.body.trunk,
            management: {
                ediblePlantParts: req.body.management.ediblePlantParts,
                FruitOrLeavesOrFlower_litter: req.body.management.FruitOrLeavesOrFlower_litter,
                plantToxicity: req.body.management.plantToxicity,
                invasivePotential: req.body.management.invasivePotential,
                SuceptibilityTodiseases: req.body.management.SuceptibilityTodiseases,
                pruningRequirement: req.body.management.pruningRequirement,
                lifeSpan: req.body.management.lifeSpan,
                surfaceRooting: req.body.management.surfaceRooting,
            }


        });
    }


}



