const mongoose = require('mongoose');

const QATCodeDropSchema = mongoose.Schema({
    implementor: {type: String, required: true},
    date: {type: Date, default: Date.now, required: true},
    jira_ticket: {type: String, required: false},
    cc_location: {type: String, required: false},
    code_area: {type: String, required: true},
    code_version: {type: String, required: true},
    environment: {type: String, required: true},
    wsm_address: {type: String, required: false},
    ini_update: {type: String, required: false},
    ini_location: {type: String, required: false},
    log_location: {type: String, required: false},
    attachment: {type: String, required: false},
}, {collection: 'QAT_Deployments'});

// , {collection: 'QAT_Deployments'}

// const STGCodeDropSchema = mongoose.Schema({
//     implementor: {type: String, required: true},
//     date: {type: Date, default: Date.now, required: true},
//     jira_ticket: {type: String, required: false},
//     cc_location: {type: String, required: false},
//     code_area: {type: String, required: true},
//     code_version: {type: String, required: true},
//     environment: {type: String, required: true},
//     wsm_address: {type: String, required: false},
//     ini_update: {type: String, required: false},
//     ini_location: {type: String, required: false},
//     log_location: {type: String, required: false},
//     attachment: {type: String, required: false},
// }, {collection: "STG_Deployments"});

module.exports = QATCodeDrop = mongoose.model('QAT_Deployment', QATCodeDropSchema);
// module.exports = STGCodeDrop = mongoose.model('STG_Deployment', STGCodeDropSchema);
// module.exports = CodeDrop = mongoose.model('QAT_Deployment', CodeDropSchema);

// module.exports = { QATCodeDrop, STGCodeDrop };