const express = require("express");
const app =  express();

let port = 8088;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
    
});

app.get("/",(req,res)=>{
    res.send("hello , Iam root");
    
});


app.get("/:username/:id", (req,res)=>{
    //  
    let{username , id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}</h1>`
    res.send(htmlStr);
})

app.get("/search" , (req,res)=>{
    let{ q} = req.query;
    console.log(req.query);
    if(!q){
        res.send("<h1>nothing to search</h1>")
    }
    res.send(`<h1>search results for query:${q}</h1>`)
})
