module.exports = function (app, multer,path) {
    let storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/images/PlantAttribute`)
        },
        filename: function (req, file, cb) {
            cb(null,file.originalname)
        }
    })
    let upload = multer({storage: storage})




    // call before Create new plant to return plantIMage name
    // return image path
    app.post('/uploadPlantAttributeImage', upload.single('image'), function (req, res, next) {
        let a = req.file.path.toString().replace(/\\/g, "/")
     res.status(201).json( a);
    })

}
