const express =  require("express");
const app = express();
const mongoose =  require("mongoose");
const path =  require("path");

const Chat = require("./models/chat.js")

const methodOverride = require("method-override")
const ExpressError = require("./ExpressError.js")


app.set('views', path.join(__dirname,"views"));
app.set("view engine", "ejs");

// ------------- css folder added------------------------------
app.use(express.static(path.join(__dirname,"public")));

// ------------to parse a data-------------------------

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//-------------------------------------------------------
main()
   .then(() => {
    console.log("connection Successful")
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// -------------newChat---------------------------------
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

//-----------new Route-----------------------------------

app.get("/chats/new",(req,res)=>{
    throw new ExpressError(404,"Page not found");
    res.render("new.ejs")
})
// -----------Create Route-------------------------------
app.post("/chats", (req,res)=>{
    let { from, to , msg } = req.body;
    let newChat =  new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at : new Date()
    })
    newChat.save()
    .then(res =>{
        console.log("chat was saved")
    })
    .catch(err=>{ 
        console.log(err)
    })
    // res.send("working")
    res.redirect("/chats")
});
//-----------------------------------------------

// ----------Edit Route------------------------

app.get("/chats/:id/edit", async(req,res)=>{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs" , { chat });
})

//  Update the Edit----------------------

app.put("/chats/:id", async(req,res)=>{
    let { id } = req.params;
    let{ msg: newMsg } = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(id,
        { msg : newMsg },
        { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

// -----Destroy CHAT------------------
app.post("/chats/:id", async(req,res)=>{
     let{ id } = req.params;
     let deletedChat = await Chat.findByIdAndDelete(id);
    //  console.log(deletedChat);
     res.redirect("/chats");
})

app.get("/" ,(req,res)=>{
    res.send("root is working ")
})

// -------------Error Handling---------------
app.use((err,req,res)=>{
    let{ status = 500, message = "Some Error Occurred"} = err;
    res.status(status).send(status).message();
})
app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});