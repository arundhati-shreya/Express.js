const mysql=require('mysql');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node_code',
    password:'nodecomplete'
});

module.exports = pool.promise();