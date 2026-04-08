const express = require("express");
const app = express();

// console.dir(app);

// incoming request ko listen krna

let port = 8080; // ports are logical endpoints of network connection (client server commubication)
app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
});

// 

// app.use((req, res) =>{
//     console.log(req);
    
//     console.log("request recieved");
    // res.send("this is the basic response");
    // res.send({
    //     name: "apple",
    //     color: "red"
    // });
    
//     res.send("<h1>Fruits<h1> <ul><li>apple</li> <li>Orange</li></ul>");
// })

app.get("/",(req, res)=>{
    res.send("Hello Iam root");
});
app.get("/apple",(req, res)=>{
    res.send("you contacted the apple path");
});
app.get("/orange",(req, res)=>{
    res.send("you contacted the oranges path");
});

app.post("/",(req, res)=>{
    res.send("this is your first post requests to rooting")
})