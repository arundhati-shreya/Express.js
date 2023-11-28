const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'node_code'
});

module.exports = pool.promise();
// con.connect((err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("connected");
//     }
// })
