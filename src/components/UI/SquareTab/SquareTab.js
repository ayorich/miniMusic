import React from 'react';

import './SquareTab.css';


const squareTab = (props) => {

    return(
        <div>
            <h1 className="music__detail">
                <span>{props.children}</span>
            </h1>
            <span className="text__detail">{props.detail}</span>
        </div>
    )
}

export default squareTab;
