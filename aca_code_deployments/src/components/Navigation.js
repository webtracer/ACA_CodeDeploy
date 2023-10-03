import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            <Link to="/">Home  </Link>
            <Link to="/qat_deployment">QAT and Pet Code Drops  </Link>
            <Link to="/st_pet_deployment">ST and PET Code Drops  </Link>
            <Link to="/stg_deployment">STG Deployments  </Link>
            <Link to="/prod_deployment">PROD Deployments  </Link>
        </nav>
    );
}

export default Navigation;