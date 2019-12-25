import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import MusicDetails from '../../components/MusicDetails/MusicDetails';
import AlbumTracks from '../../components/AlbumTracks/AlbumTracks';
import * as actions from '../../store/actions/index';


// import './MusicBuilder.css';

class MusicBuilder extends Component{
    
    render() {
      if (this.props.history.location.pathname === '/') {
        this.props.onshowSearchbar()
      }

        return (
          <React.Fragment>
            <Sidebar />
            <MusicDetails />
             <AlbumTracks />
          </React.Fragment>
        );
    }
}
// const mapStateToProps = state => {
//   return{
//     isAuthenticated: state.auth.token !== null,
//   }
// }
const mapDispatchToProps = dispatch => {
  return {
    onshowSearchbar: () => dispatch(actions.showSearchbar())
  };
};

export default connect(null, mapDispatchToProps)(MusicBuilder);