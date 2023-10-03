import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation';

const CreateQATCodeDrop = (props) => {
    console.log('CreateQATCodeDrop code was hit')
    const [QAT_Deployment, setCodeDrop] = useState({
        implementor: '',
        date: '',
        jira_ticket: '',
        cc_location: '',
        code_area: '',
        code_version: '',
        environment: '',
        wsn_address: '',
        ini_update: '',
        ini_location: '',
        log_location: '',
        attachment: ''
    });

    const onChange = (e) => {
        setCodeDrop({ ...QAT_Deployment, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:3100/api/code_drops', QAT_Deployment)
            .then((res) => {
                setCodeDrop({
                    implementor: '',
                    date: '',
                    jira_ticket: '',
                    cc_location: '',
                    code_area: '',
                    code_version: '',
                    environment: '',
                    wsn_address: '',
                    ini_update: '',
                    ini_location: '',
                    log_location: '',
                    attachment: ''
                });
                Navigation('/');
            })
            .catch((err) => {
                console.log('Error in CreateCodeDrop');
            });
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
                                    value={QAT_Deployment.implementor}
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
                                    value={QAT_Deployment.date}
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
                                    value={QAT_Deployment.jira_ticket}
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
                                    value={QAT_Deployment.cc_location}
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
                                    value={QAT_Deployment.code_area}
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
                                    value={QAT_Deployment.code_version}
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
                                    value={QAT_Deployment.environment}
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
                                    value={QAT_Deployment.wsn_address}
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
                                    value={QAT_Deployment.ini_update}
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
                                    value={QAT_Deployment.ini_location}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>LogFile: </label>
                                <input
                                    type='text'
                                    placeholder='Log File'
                                    name='log_location'
                                    className='form-control'
                                    value={QAT_Deployment.log_location}
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
                                    value={QAT_Deployment.attachment}
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

export default CreateQATCodeDrop;