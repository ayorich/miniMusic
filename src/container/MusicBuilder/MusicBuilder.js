import React, { Component } from 'react';
// import { Route, Switch } from "react-router-dom";

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import MusicDetails from '../../components/MusicDetails/MusicDetails';
import AlbumTracks from '../../components/AlbumTracks/AlbumTracks';

// import './MusicBuilder.css';

class MusicBuilder extends Component{
    
    render() {
    
        return (
          <React.Fragment>
            <Header />
            {/* <Switch>
              <Route path="/search" exact component={Sidebar} />
            </Switch> */}
            <Sidebar />
            <MusicDetails />
            <AlbumTracks />
          </React.Fragment>
        );
    }
}
export default MusicBuilder;