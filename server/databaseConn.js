import mongoose from "mongoose";

function databaseConn(){

    mongoose.connect('mongodb://localhost:27017/Shareskill')
    .then(res=> console.log("db connected"))
    .catch(err=>console.log("db isnt connected"))
}

export default databaseConn