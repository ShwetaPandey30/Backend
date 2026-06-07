const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");


// -----------------Connection to database----------------------
const MONGO_URL = 'mongodb://127.0.0.1:27017/nestora';

main().then(() =>{
    console.log("connected to DB");
})
.catch((err) =>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}
// -------------------------------------------------------------
// app.get("/testListing", async(req,res) =>{
//     let sampleListing = new Listing({
//         title: "My new home",
//         description: "By the beach",
//         price: 1200,
//         location:"Calangute, Goa",
//         country: "India"
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res)=>{
   res.send("Hi I am root!");
})

// lisiting kr rhe hai taki show kr ske (Index Route)
app.get("/listings",async(req,res)=>{
    const allListings = await Listing.find({});
        res.render("listings/index.ejs",{ allListings })
    
    
})

app.listen(8080,() =>{
    console.log("Server is Listening to port 8080")
})