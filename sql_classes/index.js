
const { faker, da } = require('@faker-js/faker');
const mysql = require('mysql2');

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

// inserting new data

let q = "INSERT INTO user (id , username, email, password) VALUES ?";

let data = [];
for(let i = 1; i<= 100; i++){
    data.push(getRandomUser()); // 100 fake user
     
}
try {
    connection.query(q, [data], (err, result)=>{
    if(err) throw err;
    console.log(result);
    
    });
}catch(err){
    console.log(err);
    
}

connection.end();


// console.log(getRandomUser());

