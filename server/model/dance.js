let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let danceSchema = new Schema({
    image: String,
    danceMetric: Number,
    danceability: String
});



module.exports =  mongoose.model("dance", danceSchema);