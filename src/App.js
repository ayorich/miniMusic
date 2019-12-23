import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import MusicBuilder from './container/MusicBuilder/MusicBuilder';
import AlbumList from './container/AlbumList/AlbumList';
import Auth from './container/Auth/Auth';
import Header from './components/Header/Header';



class App extends Component {



  render(){
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/album" component={AlbumList} />
        <Route path="/" exact component={MusicBuilder} />
        <Redirect to="/" />
      </Switch>
    );
      return (
        <div className="App">
          <Header />
          {routes}
        </div>
      );
  }
  
}

export default App;
