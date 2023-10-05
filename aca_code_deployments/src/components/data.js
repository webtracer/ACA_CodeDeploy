// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://test:test@cluster0.fqddjac.mongodb.net/?retryWrites=true&w=majority', {
//     useNewURLParser: true,
//     useUnifiedTopology: true
// }, err => err ? console.log(err) :
//     console.log('Connected successfully to Mongo')
// );

const mysql = require('mysql2/promise');
const config = require('./config');

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);

    return results;
}