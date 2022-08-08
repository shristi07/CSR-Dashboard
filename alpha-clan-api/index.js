const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const contributions = require('./routes/contribution');

const app = express();

app.use(cors());

app.use(bodyParser.json());

const CONNECTION_URL =
  "mongodb+srv://alpha-clan:alphaclan@cluster0.ukpfm.mongodb.net/?retryWrites=true&w=majority";

const PORT = 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>
console.log("Server up and running at port " + PORT)
)).catch(err=>console.log("Error",err.message));

app.use('/contributions', contributions);

