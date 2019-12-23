import React, { Component } from 'react';
import { connect } from 'react-redux';

import AlbumTrackList from './AlbumTrackList/AlbumTrackList';
import * as actions from '../../store/actions/index';
import './AlbumTracks.css'


class AlbumTracks extends Component{

    componentDidMount(){
        this.props.onalbumInit(); // to access the album data in local storage
    }

    getAlbumDetails = () => {
            const cover_xl = this.props.albumTrack[0].cover_xl;
        const title = this.props.albumTrack[0].title;
        const albumID = this.props.albumTrack[0].id;
            const album = {
                id: albumID,
                cover_xl: cover_xl,
                title: title
            }
            return album;
        }

    selectedMusicHandler = (selectedMusic) => {
        const album = this.getAlbumDetails();
       
        const key = selectedMusic;
        // console.log(album)
        const newKey = {
                ...key,
                album:album

        }

        // console.log(newKey)
        this.props.onselectMusic(newKey);
        this.props.onupdatePlayer(selectedMusic.preview);

    }
    render(){
        // console.log(this.props.albumTrack)
        const trackData = this.props.albumTrack;

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

const mapDispatchToProps = dispatch => {
    return {
        // onviewAlbum: id => dispatch(actions.viewAlbum(id)),
        onselectMusic: selectedMusic => dispatch(actions.selectMusic(selectedMusic)),
        onupdatePlayer: url => dispatch(actions.updatePlayer(url)),
        onalbumInit:() => dispatch(actions.init())

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumTracks);