const mongoose = require("mongoose");
const Schema =  mongoose.Schema;
const Review = require("./review.js");
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },   
    description: String,
    // image:{
    //     filename:  String,
    //     //default: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    //     // set: (v) => v === " "? 
    //     // "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    //     // : v,
    //     url: String
    // },
    image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        default: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60"
    }
},
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
           type: Schema.Types.ObjectId,
           ref: "Review",
        }
    ]
});
// -----Mongoose middleware to delte the lisitng with review---------
listingSchema.post("findOneAndDelete" , async(listing)=>{
    if(listing){
        await Review.deleteMany({ _id: { $in: listing.reviews }});
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;