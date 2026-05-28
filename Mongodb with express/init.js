const mongoose = require("mongoose");

const Chat =  require("./models/chat.js");

// ------------Connnection Stablization----------------

main()
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// -------------NewChats---------------------------------

let allChats = [
    {
        from: "Karan",
        to: "Luthra",
        msg: "Hey! Whats your name?😁",
        created_at:  new Date()
    },
    {
        from: "Prita",
        to: "Arora",
        msg: "Please Stay way Pervert🙄",
        created_at: new Date()
    },
    {
        from: "Karan",
        to: "Luthra",
        msg: "Dont being rude, Lets go for club tonight!🥵",
        created_at: new Date()
    },
    {
        from: "Preeta",
        to: "Arora",
        msg: "stay in your limits dont cross it😤 ",
        created_at: new Date()
    },
    {
        from: "Rishab",
        to: "Luthra",
        msg: "Leave Karan I Love you Preeta ji❤️",
        created_at: new Date()
    },
    
]

Chat.insertMany(allChats);
   
