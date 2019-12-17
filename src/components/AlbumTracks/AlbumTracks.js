import React, { Component } from 'react';
import { connect } from 'react-redux';

import AlbumTrackList from './AlbumTrackList/AlbumTrackList';
// import * as actions from '../../store/actions/index';
import './AlbumTracks.css'


class AlbumTracks extends Component{

    render(){
        console.log(this.props.albumTrack)
        const trackData = this.props.albumTrack
        return(
            <div className="album">
            <h2 className="heading-2">Track List</h2>
            <ul className="album__list">
                    {this.props.albumTrack.length !== 0 ? <AlbumTrackList trackData={trackData} selectedMusicHandler={this.selectedMusicHandler} /> : null}
            </ul>
            </div>
        )

    }
}


const mapStateToProps = state => {
    return {
        albumTrack: state.musicAlbum,

    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onviewAlbum: id => dispatch(actions.viewAlbum(id)),


//     };

// }

export default connect(mapStateToProps)(AlbumTracks);