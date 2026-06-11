const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Hi, I am 1st Middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd Middleware");
//     next();
// });
app.use("/random",(req,res, next)=>{
    console.log("I am only for random");
    next();
})

const checkTokken = (req,res,next)=>{
    let{ token }= req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new Error("ACCESS DENIED!")
};
app.get("/api",checkTokken,(req,res)=>{
    res.send("data");
})

app.get("/wrong", (req,res)=>{
    abcd = abcd;
})
// ----Utitlity Middleware----------------------
//logger- morgan
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });

// app.use((req,res)=>{
//     res.status(404).send("page not found!")
// })

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
    res.send("This is random Page");
});

app.listen(3030, () => {
    console.log("Server Listening on port 3030");
});