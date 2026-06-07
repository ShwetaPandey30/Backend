const mongoose = require("mongoose"); //mongoose are require
const initData = require("./data.js"); //data is require
const Listing = require("../models/listing.js");  //models are require

const MONGO_URL = "mongodb://127.0.0.1:27017/nestora";

main().then(() =>{
    console.log("connected to DB");
})
.catch((err) =>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data  was initalized");
    
}
initDB();