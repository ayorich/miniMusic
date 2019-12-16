import React from 'react';

import './Button.css';

const button = (props) => {

    return (
        <button  {...props} >
                <span>{props.children}</span>
            </button>
    );

};

export default button;