import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation';
import navigation from "./Navigation";

const CreateCodeDrop = (props) => {
    const [codeDrop, setCodeDrop] = useState({
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
        setCodeDrop({ ...codeDrop, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:3000/api/code_drops', codeDrop)
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

    return (
        <div className='CreateBook'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show Code Drop
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Add Code Drop</h1>
                        <p className='lead text-center'>Create new Code Drop</p>

                        <form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='UserID of person running the code deployment'
                                    name='implementor'
                                    className='form-control'
                                    value={codeDrop.implementor}
                                    onChange={onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Date'
                                    name='date'
                                    className='form-control'
                                    value={codeDrop.date}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='JIRA Ticket Number'
                                    name='jira_ticket'
                                    className='form-control'
                                    value={codeDrop.jira_ticket}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Location of Code base'
                                    name='cc_location'
                                    className='form-control'
                                    value={codeDrop.cc_location}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='date'
                                    placeholder='QAT - PET - STG - PROD'
                                    name='code_area'
                                    className='form-control'
                                    value={codeDrop.code_area}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Version'
                                    name='code_version'
                                    className='form-control'
                                    value={codeDrop.code_version}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Environment'
                                    name='environment'
                                    className='form-control'
                                    value={codeDrop.environment}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='WSN Address'
                                    name='wsn_address'
                                    className='form-control'
                                    value={codeDrop.wsn_address}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Is there an INI update'
                                    name='ini_update'
                                    className='form-control'
                                    value={codeDrop.ini_update}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Location of updated INI file'
                                    name='ini_location'
                                    className='form-control'
                                    value={codeDrop.ini_location}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Log File'
                                    name='log_location'
                                    className='form-control'
                                    value={codeDrop.log_location}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Attach Email authorization'
                                    name='attachment'
                                    className='form-control'
                                    value={codeDrop.attachment}
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