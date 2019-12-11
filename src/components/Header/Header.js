import React from 'react';

import Form from '../Form/Form';
import Logo from '../Logo/Logo';

import './Header.css';


const header = () => {


    return (
        <div className="header">
            <Logo/>
            <Form/>
        </div>
    );

};

export default header;