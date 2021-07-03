// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();
//to be able to use the process.env 
//the file to hide name, username and pw 

// create connection to our database, pass in your MySQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
    //need to use mysql from heroku to use add on jawsDB 
    //production
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}
//running it locally in dev 


module.exports = sequelize;