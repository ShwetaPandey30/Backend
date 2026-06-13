const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride= require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
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
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")))

app.get("/", (req,res)=>{
   res.send("Hi I am root!");
})

// lisiting kr rhe hai taki show kr ske (Index Route)--------
app.get("/listings",wrapAsync(async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{ allListings })
    
    
}));
// ----New route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})
//  Show Route---------------------------------
app.get("/listings/:id", wrapAsync(async(req,res)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs" , { listing });
}));
// Create Rout------------------------------
app.post("/listings", wrapAsync(async(req, res, next)=>{
        if(!req.body.listing){
            throw new ExpressError(404,"Send valid data for lisitng")
        }
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
        })
    
);
// Edit Route
app.get("/listings/:id/edit", wrapAsync(async(req,res)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs" ,{ listing });
}));

//--------Update Route--------------------------------
app.put("/listings/:id", wrapAsync(async(req,res)=>{
    if(!req.body.listing){
            throw new ExpressError(404,"Send valid data for lisitng")
        }
    let{ id } = req.params;

    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect("/listings");
}));
// ---------Deleting this route---------------------

app.delete("/listings/:id",wrapAsync(async(req,res)=>{
    let{ id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

//------------- Custom error handler-----------------------------
app.all("/*splat",(req,res) => {
    // next(new ExpressError(404,"Page not found"));
    res.status(404).send("Page not found");
});

app.use(( err,req,res,next)=>{
    let{ statusCode = 500, message="Something went wrong!"} = err;
    res.status(statusCode).send(message);
    //res.send("Something went wrong!")
})
app.listen(8080,() =>{
    console.log("Server is Listening to port 8080")
})