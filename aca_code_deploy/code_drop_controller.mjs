import express from 'express';
import 'dotenv/config';
import asyncHandler from  'express-async-handler';
import child_process from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as CodeDrop from './models/code_drop_model.js';
import cors from 'cors';

const PORT=process.env.PORT
const app = express();
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({extended:true}));

app.post('/create_drop', async (req,res) => {
    let date = new Date;
    let day = date.getDate();
    let month = date.getMonth() +1;
    let year = date.getFullYear();
    let currentDate = (`${month}-${day}-${year}`);
    let dropData = JSON.stringify(req.body);
    // let codeDrop = req.body;
    console.log(`Stringified drop data = ${dropData}`);
    console.log(`req.body.iniupdate: ${req.body.ini_update}`)
    let ini_update = req.body.ini_update;
    console.log(`ini_update: ${ini_update}`)
    ini_update = !(ini_update !== "false" || typeof (ini_update) !== 'undefined');
    let code_area = `${req.body.code_area}`;
    console.log(`After the if ini_update: ${ini_update}`)
    let codeDrop = new Object();
    // let codeDrop = {};
    codeDrop.implementor = `${req.body.implementor}`;
    codeDrop.cc_location = `${req.body.cc_location}`;
    codeDrop.code_area = `${req.body.code_area}`;
    codeDrop.code_version = `${req.body.code_version}`;
    codeDrop.environment = `${req.body.environment}`;
    codeDrop.wsn_address = `${req.body.wsn_address}`;
    codeDrop.ini_update = `${req.body.ini_update}`;
    codeDrop.ini_location = `${req.body.ini_location}`;
    codeDrop.jira_ticket = `${req.body.jira_ticket}`;
    codeDrop.jira_ticket_link = `${req.body.jira_ticket_link}`;  //Not in Prod or STG
    let fileName = `${codeDrop.code_version}_${codeDrop.environment}`;
    // let log_location = String(`\\\\gsm1900.org\\dfsroot\\as\\amdocs_code_share\\ACA_Admin_Items\\Code_Drop_Logs\\${codeDrop.code_area}_${fileName}.log`);
    let log_location = `C:\\temp\\${codeDrop.code_area}_${fileName}.log`;
    codeDrop.log_location = `${log_location}`;
    codeDrop.attachment = `${req.body.attachment}`;
    console.log(`The log location is ${log_location}`)

    // fs.writeFileSync(`\\\\gsm1900.org\\dfsroot\\as\\amdocs_code_share\\ACA_Admin_Items\\Code_Drop_Files\\code_drop.json`, JSON.stringify(codeDrop));
    fs.writeFileSync(`C:\\temp\\code_drop.json`, JSON.stringify(codeDrop));

    // const newDrop = await CodeDeploy.create(codeDrop)
    // const newDrop = await CodeDrop.create(req.query.implementor,req.query.date,
    //     req.query.cc_location,req.query.code_area,req.query.code_version,req.query.environment,
    //     req.query.wsn_address,req.query.ini_update,req.query.ini_location,req.query.jira_ticket,
    //     req.query.jira_ticket_link,req.query.attachment)
    // res.send(newDrop)
    // res.status(200).sendFile(__dirname,'/public/dropcomplete.html')

    child_process.exec('C:\\temp\\code_drop.bat', function(error, stdout, stderr) {
        console.log(stdout);
    });
});

// app.post('/create_drop', async (req, res) => {
//     console.log('/create_drop was hit');
//     let newCodeDrop;
//     newCodeDrop = req.body;
//     console.log(`req.query.implementor = ${req.query.implementor}`);
//     console.log(`req.body.implementor = ${req.body.implementor}`);
//     console.log(`newCodeDrop.implementor = ${newCodeDrop}`);
//     const codeDrop = await CodeDrop.create(req.query.implementor,req.query.date,
//         req.query.cc_location,req.query.code_area,req.query.code_version,req.query.environment,
//         req.query.wsn_address,req.query.ini_update,req.query.ini_location,req.query.jira_ticket,
//         req.query.jira_ticket_link,req.query.attachment)
//     res.send(codeDrop)
// });

const codeDropData = [];


// app.post('/test')
//     .then(res => codeDropData.push(res.data))
//     .catch(err => console.log(err.data))


// app.post('/test', async (req, res) => {
//     console.log(`/test was hit`);
//     console.log(`the req that was sent contains:\n${req}`)
//     console.log(`the req.body that was sent contains:\n${req.body}`)
//     let testDrop = new Object()
//     testDrop = req.body;
//     console.log(`the req that was sent contains:\n${testDrop.implementor}`);
// })

// const port = process.env.PORT || 3101;

app.listen(PORT, () => console.log(`ACA Code Deploy server running on port ${PORT}`))