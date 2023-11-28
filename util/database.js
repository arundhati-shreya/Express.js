const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_code','root','123456',{
    dialect:'mysql',
    host: 'localhost'
}) 
module.exports = sequelize;

