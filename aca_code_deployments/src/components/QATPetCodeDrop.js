import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import Navigation from './Navigation';
import request from 'superagent';

const CreateCodeDrop = (props) => {
    console.log('CreateCodeDrop code was hit')
    const [Code_Deployment, setCodeDrop] = useState({
        implementor: '',
        date: '',
        cc_location: '',
        code_area: '',
        code_version: '',
        environment: '',
        wsn_address: '',
        ini_update: '',
        ini_location: '',
        jira_ticket: '',
        jira_ticket_link: '',
        log_location: '',
        attachment: ''
    });

    console.log(`Code_Deployment = ${JSON.stringify(Code_Deployment)}`);
    const onChange = (e) => {
        setCodeDrop({ ...Code_Deployment, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(``)
        console.log(`OnSubmit was hit`);
        console.log(`And Code_Deployment looks like:\n${JSON.stringify(Code_Deployment)}`);
        console.log(`And Code_Deployment looks like:\n${Code_Deployment}`);

        // let request = new XMLHttpRequest();
        // request.open('POST', 'http://localhost:3101/create_drop', true);
        // request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        // request.send(JSON.stringify(Code_Deployment));
        request
            .post('http://localhost:3101/create_drop')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(Code_Deployment)
            .end(function(err, res) {
                console.log(err);
                Navigation('/')
            });

        // axios.post('http://localhost:3101/create_drop', JSON.stringify(Code_Deployment))
        //     .then((res) => {
        //         setCodeDrop({
        //             implementor: '',
        //             date: '',
        //             cc_location: '',
        //             code_area: '',
        //             code_version: '',
        //             environment: '',
        //             wsn_address: '',
        //             ini_update: '',
        //             ini_location: '',
        //             jira_ticket: '',
        //             jira_ticket_link: '',
        //             attachment: ''
        //         });
        //         Navigation('/');
        //     })
        //     // .then((result) => result.json())
        //     .then((info) => {
        //         console.log(info);
        //         Navigation('/');
        //     })
        //     .catch((err) => {
        //         console.log(`Axios post and then error ... ${Code_Deployment}`)
        //         console.log('Error in CreateCodeDrop');
        //     });
    };
    console.log('The QATPETCodeDrop js file was hit');
    return (
        <div className='CreateCodeDrop'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Create QAT / PET Code Drop</h1>
                        <form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
                                <label>Userid: </label>
                                <input
                                    type='text'
                                    placeholder='UserID of person running the code deployment'
                                    name='implementor'
                                    className='form-control'
                                    value={CreateCodeDrop.implementor}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Date: </label>
                                <input
                                    type='date'
                                    placeholder='Date'
                                    name='date'
                                    className='form-control'
                                    value={CreateCodeDrop.date}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Code Base: </label>
                                <input
                                    type='text'
                                    placeholder='Location of Code base'
                                    name='cc_location'
                                    className='form-control'
                                    value={CreateCodeDrop.cc_location}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Code Area: </label>
                                <input
                                    type='text'
                                    placeholder='QAT - PET - STG - PROD'
                                    name='code_area'
                                    className='form-control'
                                    value={CreateCodeDrop.code_area}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Version: </label>
                                <input
                                    type='text'
                                    placeholder='Version'
                                    name='code_version'
                                    className='form-control'
                                    value={CreateCodeDrop.code_version}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Environment: </label>
                                <input
                                    type='text'
                                    placeholder='Environment'
                                    name='environment'
                                    className='form-control'
                                    value={CreateCodeDrop.environment}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>WSN: </label>
                                <input
                                    type='text'
                                    placeholder='WSN Address'
                                    name='wsn_address'
                                    className='form-control'
                                    value={CreateCodeDrop.wsn_address}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>INI Update (Y/N): </label>
                                <input
                                    type='checkbox'
                                    placeholder='Is there an INI update'
                                    name='ini_update'
                                    className='form-control'
                                    value={CreateCodeDrop.ini_update}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Updated INI Location: </label>
                                <input
                                    type='text'
                                    placeholder='Location of updated INI file'
                                    name='ini_location'
                                    className='form-control'
                                    value={CreateCodeDrop.ini_location}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>JIRA Ticket: </label>
                                <input
                                    type='text'
                                    placeholder='JIRA Ticket Number'
                                    name='jira_ticket'
                                    className='form-control'
                                    value={CreateCodeDrop.jira_ticket}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>JIRA Ticket Link: </label>
                                <input
                                    type='text'
                                    placeholder='JIRA Ticket Link'
                                    name='jira_ticket_link'
                                    className='form-control'
                                    value={CreateCodeDrop.jira_ticket_link}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Attachment: </label>
                                <input
                                    type='file'
                                    placeholder='Attach Email authorization'
                                    name='attachment'
                                    className='form-control'
                                    value={CreateCodeDrop.attachment}
                                    onChange={onChange}
                                />
                            </div>
                            <input
                                type='submit'
                                className='btn btn-outline-warning btn-block mt-4'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCodeDrop;