import React from 'react';

import'./FormInput.css';

const formInput = (props) => {
    let inputElement = null;
    const inputClasses = ['FormInput'];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid');
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className='InputElement'
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className='InputElement'
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className='InputElement'
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className='InputElement'
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={inputClasses.join(' ')}>
            {/* <label className='FormLabel'>{props.label}</label> */}
            {inputElement}
        </div>
    );

};

export default formInput;