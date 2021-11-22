const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const water = ["high", "moderate", "low"]
const plantType = ["Cactus/Succulent", "Ground_cover", "Lawn", "Palm", "Shrub", "Tree", "Vine"]
const light = ["Full", "part", "shade"]
const soil = ["clay", "sand", "loam"]
const soilPH = ["Acidic(pH<7)", "Neutral(ph=7)", "Alkaline(pH>7)"]
const yesOrNo = ["yes", "no"]
const lifeCycle = ["Annual", "Perennial", "Biennial"]
const outDoorUse = ["screen", "mass planting", "Hedge", "specimen", "Border plant", "street"]
const specialized = ["topiary", "indoor", "bonsai", "container", "espalier", "sport field"]
const nativeEnvironment = ["shade", "windbreak", "erosion control", "pollution Tolerant/Urban", "reclamation", "wildlife", "native to lebanon"]
const HumanUse = ["edible", "medicinal", "cut flower / arrangement"]
const building = ["intensive", "extensive", "facade", "green roof"]
const canopy_Shape = ["weeping", "upright/erect", "vase", "pyramidal", "rounded", "columnar", "oval", "palm", "spreading"]
const timeToUltimateHeight = ["0-1(years)", "1-2(years)", "2-5(years)", "5-10(years)", "10-20(years)", "20-50(years)", ">50(years)"]
const growthRate = ["slow", "moderate", "fast"]
const persistence = ["evergreen", "semi evergreen", "deciduous"]
const scent = ["evergreen", "semi evergreen", "deciduous"]
const season = ["spring", "winter", "summer", "year round", "fall"]
const fruitType = ["dry", "fleshy"]
const trunkEstheticValue = ["showy", "not showy", "smooth texture", "intermediate texture", "roughTexture", "deeply fissured", "papery", "spines", "colored"]
const pruningRequirement = ["needed", "little needed", "none"]
const lifeSpan = ["<25(years)", "25-50(years)", ">50(years)"]


let plantSchema = new Schema({
        _someId: Schema.Types.ObjectId,

        basicInfo: {

            annualTemperature: {type: Number, required: true},
            HeatZones: {type: Number, required: true},
            HardinessZones: {type: Number, required: true},
            origin: {type: String, required: true, min: 5},
            imgSrc: {type: String, required: true},
            description: {type: String, required: true, min: 5},
            Pronounciation: {type: String, required: true, min: 5},
            country: {type: [String], required: true, min: 3},
            scientific_name: {type: String, required: true, min: 5},
            common_name: {type: String, required: true, min: 5},
            CommonArabicName: {type: String,  min: 5},
            CommonFrenchName: {type: String,  min: 5},
            type: {name: {type: String, required: true, enum: plantType}},
            light: {type: String, enum: light, required: true},
            soilPH: {type: String, enum: soilPH, required: true},
            soil: {type: String, enum: soil, required: true},
            water: {type: [String], required: true, enum: water},
            Tolerance: {
                    Heat: {type: String, required: true, enum: yesOrNo},
                    Drought: {type: String, required: true, enum: yesOrNo},
                    Frost: {type: String, required: true, enum: yesOrNo},
                    salt: {type: String, required: true, enum: yesOrNo},
                },
            lifeCycle: {type: String, required: true, enum: lifeCycle},
        },
        use: {
            outdoor: {type: String, enum: outDoorUse, required: true},
            specialized: {type: String, enum: specialized, required: true},
            nativeEnvironment: {type: String, enum: nativeEnvironment, required: true},
            humanUse: {type: String, enum: HumanUse, required: true},
            building: {type: String, enum: building, required: true},

        },
        shapeSize: {
            size: {type: String, required: true, min: 3},
            canopy_Shape: {
                name: {type: String, required: true, enum: canopy_Shape}
            },
            PlantHeight: {type: Number, required: true,},
            spread: {type: Number, required: true,},
            timeTOUltimateHeight: {
                type: String, enum: timeToUltimateHeight, required: true
            },
            growthRate: {type: String, required: true, enum: growthRate}
        },
        margins: {type: String, required: true, min: 3},
        Venation: {type: String, required: true, min: 3},
        leaf: {
            color_in_Growing_Season: {type: String, required: true, min: 3},
            color_in_changing_Season: {type: String, required: true, min: 3},
            persistence: {type: [String], required: true, enum: persistence},
            scent: {type: [String], required: true, enum: scent},
        },
        flower: {
            color: {type: String, required: true, min: 5},
            scent: {type: [String], required: true, enum: scent},
            Blade_Length: {type: String, required: true, min: 3},
            season: {type: [String], required: true, enum: season},
            showiness: {type: [String], required: true, enum: yesOrNo},
            flower_img: {data: Buffer, contentType: String}
        },
        fruit: {
            color: {type: String, required: true, min: 5},
            size: {type: Number, required: true},
            season: {type: [String], required: true, enum: season},
            showiness: {type: [String], required: true, enum: yesOrNo},
            type: {type: String, enum: fruitType}
        },
        Trunk: {type: String, enum: trunkEstheticValue, required: true},
        management: {
            ediblePlantParts: {required: true, type: String, enum: yesOrNo},
            FruitOrLeavesOrFlower_litter: {required: true, type: String, enum: yesOrNo},
            plantToxicity: {required: true, type: String, enum: yesOrNo},
            invasivePotential: {required: true, type: String, enum: yesOrNo},
            SuceptibilityTodiseases: {required: true, type: String, enum: yesOrNo},
            pruningRequirement: {required: true, type: String, enum: pruningRequirement},
            lifeSpan: {required: true, type: String, enum: lifeSpan},
            surfaceRooting: {required: true, type: String, enum: yesOrNo},
        }

    },
    {
        collection: 'Flowers'
    });

let Model = mongoose.model("plant",plantSchema);
mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false");

exports.schema = plantSchema;
exports.mongooseDB = mongoose;
