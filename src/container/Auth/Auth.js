import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import FormInput from '../../components/UI/FormInput/FormInput';
import Button from '../../components/UI/Button/Button';

import { checkValidity } from '../../shared/utility';
import './Auth.css';





class Auth extends Component{
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls ={
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
         
        this.setState({ controls: updatedControls });
    }

    render(){
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        console.log(formElementsArray)
      
        let form = formElementsArray.map(formElement => (
            
            <FormInput
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ));
        
        return(
            <div className='auth'>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <div className='formbtn '>
                    <Button className='btn '>SUBMIT</Button>

                    </div>
                </form>
                
            </div>
        )
    }
}

export default Auth;