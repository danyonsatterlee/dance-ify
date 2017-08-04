let mongoose = require("mongoose");
const express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let danceRouter = require("./routes/dance.js");
let loginRouter = require("./routes/login.js");
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.use("/danceify",danceRouter);
app.use("/login",loginRouter);

app.listen(port,()=>{
    console.log(`listening to ${port}`)
});

mongoose.connect("mongodb://localhost:27017/danceify");