import React from 'react';

import Form from '../Form/Form';
import Logo from '../Logo/Logo';

import './Header.css';


const header = (props) => {


    return (
        <div className="header">
            <Logo/>
            <Form/>
            <p>logIN</p>
        </div>
    );

};

export default header;