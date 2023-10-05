const db = require('../config/db');
// const helper = require('../helper');
const config = require('../services/config');


async function create(newCodeDrop){
    let dropData = JSON.stringify(newCodeDrop);
    console.log(JSON.stringify(dropData));
    /* Get the Code Area so that we can insert to the correct table */
    let codeArea = dropData.code_area;
    let tableName = codeArea + 'CodeDrop';

    /* Send the SQL Statement */
    // const result = await db.query(
    //     `INSERT INTO ${tableName}
    //   (codeDropImplementor,codeDropCodeLocation,codeDropCodeArea,codeDropCodeVersion,
    //     codeDropEnvironment,codeDropWSNAddress,codeDropINIUpdate,codeDropINILocation,codeDropJiraTicket,
    //     codeDropJiraLink,codeDropLogLocation,codeDropAttachment)
    //   VALUES
    //   ('${newCodeDrop.implementor}','${newCodeDrop.cc_Location}','${newCodeDrop.code_area}',
    //    ' ${newCodeDrop.code_version}','${newCodeDrop.environment}','${newCodeDrop.wsn_address}','${newCodeDrop.ini_update}',
    //     '${newCodeDrop.ini_location}','${newCodeDrop.jira_ticket}','${newCodeDrop.jira_ticket_link}','${newCodeDrop.log_location}',
    //     '${newCodeDrop.attachment}')`
    // );
    //
    // let message = `Error in creating ${codeArea} Code Drop`;
    //
    // if (result.affectedRows) {
    //     message = `${codeArea} Code Drop created successfully`;
    // }
    //
    // return {message};
}

module.exports = { create }