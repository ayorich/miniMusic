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
  
  // constructor(props){
  //   super(props);
  //   this.routerRender()
  // }


   componentDidMount() {
     this.props.onTryAutoSignin();
  }
  // routerRender = async() =>{
  //  await this.props.onTryAutoSignin();
  // }

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
         <Route path="/auth" component={Auth} />
        <Route path="/" exact component={MusicBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated){
        // console.log('auth true')

      routes = (
        <Switch>
          <Route path="/album" component={AlbumList} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={MusicBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
    // console.log('render')
      return (
        <React.Fragment>
          <Header />
          {routes}
          <div className="copyright">
            &copy; by Kayode Ayodele. Powered by &nbsp;
            <a href="http://www.deezer.com" target="_blank" rel="noopener noreferrer" className="link">Deezer.com</a>.
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

