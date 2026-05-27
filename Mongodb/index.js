const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(res=>{
    console.log("Successfully connected!")
}).catch(err =>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
}

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    gender: String,
    date: {type: Date, default: Date.now},
    
});

const User = mongoose.model("User", userSchema);

// User.deleteMany({age:{$lt: 45}}).then(res=>{
//     console.log(res);
    
// }).catch(err=>{
//     console.log(err);
    
// })
// User.findByIdAndDelete("69f70558854ec6f2c6f3e27a").then(res=>{
//     console.log(res);
    
// }).catch(err=>{
//     console.log(err);
    
// })

// User.findByIdAndUpdate("69f70558854ec6f2c6f3e27a", {gender: "female"})
// .then(res=>{
//     console.log(res)

// }).catch(err=>{
//     console.log(err);
    
// })
// User.findOneAndUpdate({age: {$gt:35}}, {email: "motilal@yahoo.in"}).then(res=>{
//     console.log(res)

// }).catch(err=>{
//     console.log(err);
    
// })
// User.updateMany({age: {$gt:35}}, {age: 55}).then(res=>{
//     console.log(res)

// }).catch(err=>{
//     console.log(err);
    
// })

// User.updateOne({name: "Arjun Kapoor"}, {name: "Motilal"}).then(res=>{
//     console.log(res)

// }).catch(err=>{
//     console.log(err);
    
// })
// User.find({ age:{ $gt: 35 }}).then(res=>{
//     console.log(res)

// }).catch(err=>{
//     console.log(err);
    
// })
// User.findById("69f7047b2cace8b4d6673203").then(res=>{
//     console.log(res)

// }).catch(err=>{
//     console.log(err);
    
// })
// User.find({_id: "69f7047b2cace8b4d6673203"}).then(res=>{
//     console.log(res)

// }).catch(err=>{
//     console.log(err);
    
// })

// const user1 = User({
//     name: "Janhavi Kapoor",
//     age: 34,
//     email: "jaan@yahoo.in",
//     gender: "female"
// })

// user1.save();

// const user2 = User({
//     name: "Arjun Kapoor",
//     age: 45,
//     email: "arjun@yahoo.in",
//     gender: "male"
// })

// user2.save().then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err)
// })

// User.insertMany([
//     {name:"Khusi", age: 35, email:"khushi.1@gmail.com", gender: "female"},
//     {name:"Varun Dhawan", age: 35, email:"varun.1@gmail.com", gender: "male"}

// ]).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
    
// })