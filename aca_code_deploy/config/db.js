// import 'dotenv/config';

const mysql = require('mysql2/promise');
const config = require('../services/config');

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);

    return results;
}



module.exports = {
    query
//   ,
}

/* Mongoose Connection - Retired */
// const dbConnection = {
//     db: {
//         host: 'localhost',
//         user: username,
//         password: password,
//         database: 'aca_code_deployment',
//         connectTimeout: '60000',
//         multipleStatements: true
//     },
//     listPerPage: 10,
// };
//
// module.exports = dbConnection;


// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get("mongoURI");
//
// const connectDB = async() => {
//     try {
//         mongoose.set('strictQuery', true);
//         await mongoose.connect(db, {
//             useNewURLParser: true,
//         });
//
//         console.log('MongoDB is connected...');
//         console.log(`Connect string is: ${db}`);
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };
//
// module.exports = connectDB;