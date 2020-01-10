import React, { Component } from "react";
import { connect } from 'react-redux';

import RouterRender from './container/Routes/Routes'
import Header from './components/Header/Header';
import * as actions from './store/actions/index';

import './App.css';

class App extends Component {

   componentDidMount() {
     this.props.onTryAutoSignin();
   
  }
  
 
  render(){
    
      return (
        <React.Fragment>
          <Header />
          <div className='appBuilder'>
            <RouterRender isAuthenticated={this.props.isAuthenticated}/>
          </div>
          <div className="copyright">
            &copy; by Kayode Ayodele. Powered by &nbsp;
            <a href="http://www.deezer.com" target="_blank" rel="noopener noreferrer" className="link">Deezer.com</a>
          </div>
        </React.Fragment>
      );
  }
  
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignin: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

