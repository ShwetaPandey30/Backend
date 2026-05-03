
const { faker, da } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:'shweta_mysql30'
});

let getRandomUser=()=> {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        
        faker.internet.password(),
        
    ];
}




app.get("/" , (req,res) => {
    let q= `SELECT count(*) FROM user`;
    try {
    connection.query(q, (err, result)=>{
    if(err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs", { count });
    });
    }catch(err){
    console.log(err);
    res.send("some err in database")
    }
   
});

// Show route

app.get("/user", (req,res)=>{
   let q =  `SELECT * FROM user`;
   try {
    connection.query(q, (err, users)=>{
    if(err) throw err;

    res.render("showUsers.ejs" , {users});
    });
    }catch(err){
    console.log(err);
    res.send("some err in database")
    }
   
})

// Edit route
app.get("/user/:id/edit", (req,res) =>{
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`
    try {
    connection.query(q, (err, result)=>{
    if(err) throw err;
    // console.log(result);
    let user=result[0];
    res.render("edit.ejs", { user });
    });
    }catch(err){
    console.log(err);
    res.send("some err in database")
    }
    // console.log(id);
    
    // res.render("edit.ejs");
})
app.listen('8080', () =>{
    console.log("Server is listening to port 8080");
    
});

