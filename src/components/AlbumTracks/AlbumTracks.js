import React, { Component } from 'react';
import { connect } from 'react-redux';

import AlbumTrackList from './AlbumTrackList/AlbumTrackList';
import * as actions from '../../store/actions/index';
import Spinner from '../UI/Spinner/Spinner'
import './AlbumTracks.css'


class AlbumTracks extends Component{

    componentDidMount(){
        this.props.onalbumInit(); // to access the album data in local storage on page refresh/signin
    }

    getAlbumDetails = () => {
            const cover_xl = this.props.album.cover_xl;
        const title = this.props.album.title;
        const albumID = this.props.album.id;
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
        // console.log(this.props.loading)
        const album = this.props.album;
        let albumTracks= <AlbumTrackList album={album}
         selectedMusicHandler={this.selectedMusicHandler} />

         if (this.props.loading) {
            albumTracks = <Spinner />
        }

        return(
            <div className="album">
            <h2 className="heading-2">Track List</h2>
            <ul className="album__list">
              {this.props.isAuthenticated ? albumTracks :null}
            </ul>
            </div>
        )

    }
}


const mapStateToProps = state => {
    return {
        album: state.musicAlbum.album,
        loading: state.musicAlbum.loading,
        isAuthenticated: state.auth.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onviewAlbum: id => dispatch(actions.viewAlbum(id)),
        onselectMusic: selectedMusic => dispatch(actions.selectMusic(selectedMusic)),
        onupdatePlayer: url => dispatch(actions.updatePlayer(url)),
        onalbumInit: () => dispatch(actions.albuminit()) //GETTING THE ALBUM DATA FROM LOCAL STORAGE

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumTracks);