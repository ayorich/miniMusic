import React from 'react';

import classes from './Input.css';

const input = (props) => {
   
        
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            <input value={props.value} />;
        </div>
    );

};

export default input;