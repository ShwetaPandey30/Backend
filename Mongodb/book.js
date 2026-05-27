const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/amazon');

main().then(res=>{
    console.log("Successfully connected!")
}).catch(err =>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon')
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 20,
    },
    author:{
        type: String,
    },
    price:{
        type: Number,
        min : [1,"Price is too low for Amazon Selling"]
    },
    discount:{
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "nonfiction"],
    },
    genra: [String],
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("69faedcda6170b99013cf657" ,{price: -100 }, {runValidators: true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});
// let book1 = new Book({
//     title: "DC Comics",
//     // author: "Harper lee",
//     price: 1000,
//     category: "fiction",
//     genra: ["fiction", "comics","superhero"],
// })
// book1.save().then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })