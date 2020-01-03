import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch, Redirect} from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent/asyncComponent';


import Header from './components/Header/Header';
import MusicBuilder from './container/MusicBuilder/MusicBuilder';
// import AlbumList from './container/AlbumList/AlbumList';
// import Auth from './container/Auth/Auth';
// import Logout from './container/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import './App.css';

const asyncAlbumList = asyncComponent(() => {
  return import('./container/AlbumList/AlbumList');
});

const asyncLogout = asyncComponent(() => {
  return import('./container/Auth/Logout/Logout');
});

const asyncAuth = asyncComponent(() => {
  return import('./container/Auth/Auth');
});

class App extends Component {
  state={
    isAuth:null
  }

   componentDidMount() {
     this.props.onTryAutoSignin();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.isAuthenticated)
    console.log(this.props.isAuthenticated)
    if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
      this.setState({
        isAuth: this.props.isAuthenticated
      })
    }
  }

  render(){
    // const routes = (
    //   <Switch>
    //     {this.props.isAuthenticated ? <Route path="/album" exact component={AlbumList} />:null}
    //     {this.props.isAuthenticated ? <Route path="/logout" component={Logout} />:<Route path="/auth" component={Auth} />}
    //     <Route path="/" exact component={MusicBuilder} />
    //     <Redirect to="/"  />
    //   </Switch>
    // );
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={MusicBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.state.isAuth){
      routes = (
        <Switch>
          <Route path="/album" component={asyncAlbumList} />
          <Route path="/logout" component={asyncLogout} />
          <Route path="/" exact component={MusicBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
      return (
        <React.Fragment>
          <Header />
          <div className='appBuilder'>
          {routes}
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
    // token: state.auth.token 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignin: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

