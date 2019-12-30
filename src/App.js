import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import MusicBuilder from './container/MusicBuilder/MusicBuilder';
import AlbumList from './container/AlbumList/AlbumList';
import Auth from './container/Auth/Auth';
import Header from './components/Header/Header';
import Logout from './container/Auth/Logout/Logout';
import * as actions from './store/actions/index';




class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignin();
  }



  render(){
    let routes = (
      <Switch>
        <Route path="/album" component={AlbumList} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={MusicBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  
    if (!this.props.isAuthenticated){
      routes = (
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={MusicBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
      return (
        <React.Fragment>
          <Header />
          {routes}
        </React.Fragment>
      );
  }
  
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignin: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

