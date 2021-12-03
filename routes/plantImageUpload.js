module.exports = function (app, multer,path) {
    let storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/images/upload`)
        },
        filename: function (req, file, cb) {
            cb(null,Date.now()+ file.originalname)
        }
    })
    let upload = multer({storage: storage})


    // return image path
    app.post('/uploadPlantImage', upload.single('image'), function (req, res, next) {
        let a = req.file.path.toString().replace(/\\/g, "/")
     res.status(201).json( a);
    })

}
