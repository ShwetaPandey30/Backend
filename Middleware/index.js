const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.get("/err",( req, res)=>{
    abcd = abcd;

})
app.use("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is Forbidden")
})
// ------------custom error classes to print the error---------------
const checkToken = (req,res,next) =>{
    let{ token } = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
}

app.get("/api", checkToken ,(req,res)=>{
    res.send("data");
});


app.use((err, req, res, next)=>{
    let{ status = 500, message } = err;
    res.status(status).send(message);
})
// app.use((err, req, res, next)=>{
//     console.log("-------Error--------");
//     res.send(err);
//})
app.use((err, req, res, next)=>{
    console.log("-------Error2 Middleware--------");
    next(err);
})







app.listen(3030, () => {
    console.log("Server Listening on port 3030");
});