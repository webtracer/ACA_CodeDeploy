const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "localhost",
        user: "root",
        password: "Joejam5hangrabeth!",
        database: "aca_code_deployment",
        connectTimeout: 60000,
        multipleStatements: true
    },
    listPerPage: 10,
};

module.exports = config;