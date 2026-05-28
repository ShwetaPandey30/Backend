const express =  require("express");
const app = express();
const mongoose =  require("mongoose");
const path =  require("path");

const Chat = require("./models/chat.js")


app.set('views', path.join(__dirname,"views"));
app.set("view engine", "ejs");

// -------css folder added-------------------
app.use(express.static(path.join(__dirname,"public")));

main()
   .then(() => {
    console.log("connection Successful")
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// -------------newChat------------------------------
// let chat1 = new Chat({
//     from: "Swati",  
//     to:   "priya",
//     msg: "Hey! Swati this side",
//     created_at: new Date()
// });

// chat1.save().then((res) =>{
//     console.log(res)
// });

// -----------Index Rout----------------------------------------

app.get("/chats",async (req,res)=>{
    let chats = await Chat.find()
    console.log(chats);
    res.render("index.ejs", { chats })
    
})


app.get("/" ,(req,res)=>{
    res.send("root is working ")
})

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});