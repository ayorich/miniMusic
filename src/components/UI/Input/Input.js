import React from 'react';

import'./Input.css';

const input = (props) => {
   
    return (
        <input value={props.value} className="Input" placeholder="Search over 1,000,000 musics..."/>
    );

};

export default input;