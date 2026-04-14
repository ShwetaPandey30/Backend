const express = require("express");

const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } =require('uuid');

 

app.use(express.urlencoded({ extended: true}));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id : uuidv4(),
        username : "Shweta Pandey",
        content : "I manifest to get a job!"
    },
    {
        id : uuidv4(),
        username : "God",
        content : "Your wishes will come true :)"
    },
    {
        id : uuidv4(),
        username : "Me",
        content : "Thankyou in beleiveing in me!🙏"
    },
    {
        id : uuidv4(),
        username : "Ujala Pandey",
        content : "I Got selected for my first internship"
    }
]

app.get("/posts", (req,res)=>{
    res.render("index.ejs",{ posts})
});

app.get("/posts/new", (req,res) =>{
    res.render("new.ejs")
})

app.post("/posts" ,(req,res)=>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({ id,username, content})
    res.redirect("/posts")
})
app.get("/posts/:id" ,(req,res)=>{
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs", { post })
});

app.listen(port , (req,res)=>{
    console.log("listening to the port: 8080")
})