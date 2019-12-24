import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormInput from '../../components/UI/FormInput/FormInput';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'


import { checkValidity } from '../../shared/utility';
import './Auth.css';





class Auth extends Component{
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-Mail Address'
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
      submitHandler = ( event ) => {
          console.log(this.state.isSignup)
        event.preventDefault();
        this.props.onAuth( this.state.controls.email.value, 
            this.state.controls.password.value, this.state.isSignup);
    }
    switchAuthModeHandler = () => {
        this.setState({ isSignup: false });
    }
 

    render(){
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        // console.log(formElementsArray)
      
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
        if (this.props.loading) {
            form = <Spinner />
        }
        
        return(
            <div className='auth'>
                {authRedirect}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <div className='formbtn '>
                        <Button className='btn '>{this.state.isSignup ? 'LOG IN' : 'SIGN UP'}</Button>
                    </div>
                    <p>Are you not sign up yet? <span className='signup' onClick={this.switchAuthModeHandler}>sign up </span></p>
                </form>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        // error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        // onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
