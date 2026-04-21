
const { faker, da } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");

const app = express();

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
    console.log(result[0]["count(*)"]);
    res.send(result[0]["count(*)"]);
    });
    }catch(err){
    console.log(err);
    res.send("some err in database")
    }
   
});



app.listen('8080', () =>{
    console.log("Server is listening to port 8080");
});

// try {
//     connection.query(q, [data], (err, result)=>{
//     if(err) throw err;
//     console.log(result);
    
//     });
// }catch(err){
//     console.log(err);
    
// }

// connection.end();