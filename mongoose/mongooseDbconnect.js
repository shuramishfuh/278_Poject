const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/278Project");
exports.mongooseDB = mongoose;