import React, { Component } from 'react';
import { connect } from 'react-redux';

import AlbumTrackList from './AlbumTrackList/AlbumTrackList';
import * as actions from '../../store/actions/index';
import Spinner from '../UI/Spinner/Spinner';
// import Button from '../UI/Button/Button';
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
    saveAlbumHandler = (album, token) => {
        const date =new Date();
        const time = date.getTime()
        const albumData ={
            album:album,
            userId: this.props.userId,
            time: time,
        }

        this.props.onsaveAlbum(albumData, token)

    }
    render(){
        // console.log(this.props.loading)
        const album = this.props.album;
        let albumTracks= <AlbumTrackList album={album}
                                         selectedMusicHandler={this.selectedMusicHandler}
            saveAlbumHandler={this.saveAlbumHandler}
            saveloading={this.props.saveloading}
            token={this.props.token} />

         if (this.props.loading) {
            albumTracks = <Spinner />
        }

        return(
            <div className="album">
            <h2 className="heading-2">Track List</h2>
                {this.props.album ? albumTracks : null}
            {/* <ul className="album__list">
              {this.props.isAuthenticated ? albumTracks :null}
            </ul> */}
            {/* {this.props.album? <Button
                    onClick={() => this.saveAlbumHandler(this.props.album, this.props.token)}
                    className='btn'
                    // disabled={this.state.disabled}
                >{this.props.saveloading ? 'Saving...':'SAVE ALBUM'}
                    
            </Button>:null}  */}
            </div>
        )

    }
}


const mapStateToProps = state => {
    return {
        album: state.musicAlbum.album,
        loading: state.musicAlbum.loading,
        isAuthenticated: state.auth.token !== null,
        token:state.auth.token,
        userId: state.auth.userId,
        saveloading: state.savedAlbums.loading

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onselectMusic: selectedMusic => dispatch(actions.selectMusic(selectedMusic)),
        onupdatePlayer: url => dispatch(actions.updatePlayer(url)),
        onalbumInit: () => dispatch(actions.albumInit()), //GETTING THE ALBUM DATA FROM LOCAL STORAGE
        onsaveAlbum: (albumData, token) => dispatch(actions.saveAlbum(albumData, token))


    };

}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumTracks);