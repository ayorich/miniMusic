import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import withErrorInterceptor from '../../hoc/withErrorInterceptor/withErrorInterceptor';
import {authInstance as axios} from '../../axios-base';

import FormInput from '../../components/UI/FormInput/FormInput';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'


import { checkValidity } from '../../shared/utility';
import './Auth.css';





class Auth extends Component{
    constructor(props) {
        super(props)
    this.state = {
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
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'confirmPassword'
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
        isSignup: true,
        passError: false
    }
  // Creating the scroll ref
    this.topRef = React.createRef()
  }

    componentDidMount(){
        if (this.props.history.location.pathname !== '/') {
            this.props.onhideSearchbar()
        }
        this.scrollToTop();
    }
    scrollToTop = () => {
        this.topRef.current.scrollIntoView({ behavior: 'smooth' })
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
        event.preventDefault();
        if (this.state.controls.password.value !== this.state.controls.confirmPassword.value && !this.state.isSignup){
            return this.setState({passError : true})
        }
        this.setState({ passError: false })
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
        if(this.state.isSignup){
            //TO DISPLAY SIGN IN PAGE
            form =form.slice(0,2)
        }

        if (this.props.loading) {
            form = <div className="formSpinner">
                <Spinner />
                 </div>
        }
        return(
            <div className="authBuilder" ref={this.topRef} >
                <div className='auth'>
                {authRedirect}
                <form onSubmit={this.submitHandler}>
                    {form}
                    {this.state.passError? <label className="passwordError">***Please enter the same password again.</label>: null}
                     <div className='formbtn '>
                            {!this.props.loading ? <Button type="submit" className='btn '>
                                {this.state.isSignup ? 'LOG IN' : 'SIGN UP'}
                            </Button> : null}
                    </div>
                {!this.props.loading ?<div>
                   {this.state.isSignup? <p className='signup'>
                         Don't have an account? 
                        <span className='signup__link' onClick={this.switchAuthModeHandler}> SIGN UP </span>
                    </p>: null}
                    </div>:null}

                </form>
                
            </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onhideSearchbar: () => dispatch(actions.hideSearchbar())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorInterceptor(Auth, axios));
