import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import MusicDetails from '../../components/MusicDetails/MusicDetails';
import AlbumTracks from '../../components/AlbumTracks/AlbumTracks';
import * as actions from '../../store/actions/index';


import './MusicBuilder.css';

class MusicBuilder extends Component{
    componentDidMount(){
      if (this.props.history.location.pathname === '/') {
        this.props.onshowSearchbar()
      }
    }
    render() {
        return (
          <div className="musicBuilder">
            <Sidebar />
            <MusicDetails />
             <AlbumTracks />
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onshowSearchbar: () => dispatch(actions.showSearchbar())
  };
};

export default connect(null, mapDispatchToProps)(MusicBuilder);