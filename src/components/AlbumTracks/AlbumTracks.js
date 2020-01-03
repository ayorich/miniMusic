import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'
import AlbumTrackList from './AlbumTrackList/AlbumTrackList';
import * as actions from '../../store/actions/index';

import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button';

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
        const newKey = {
                ...key,
                album:album

        }

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

        this.props.onsavingBtn(); // CHANGING THE SAVE BUTTON TO SAVING 
        this.props.onsaveAlbum(albumData, token); //SAVING ALBUM TO FIRESTORE

    }
    render(){
        const album = this.props.album;
        let albumTracks= <AlbumTrackList album={album}
                                         selectedMusicHandler={this.selectedMusicHandler}
                                 />

         if (this.props.loading) {
            albumTracks = <Spinner />
        }
        // BUTTON RENDERING
        const saveButton = <Button
                                onClick={() => this.saveAlbumHandler(this.props.album, this.props.token)}
                                className='btn'
                            >SAVE ALBUM
                        </Button>
        let renderButton=  null
         if (this.props.saveloading ){
             renderButton = < Button className='btn' >saving....</Button >
         }else if(this.props.error){
             renderButton = <Button
                                onClick={() => this.saveAlbumHandler(this.props.album, this.props.token)}
                                className='btn'
                                style={{
                                    backgroundImage: 'linear-gradient(to right bottom,rgb(236, 147, 147),rgb(240, 138, 131))'
                                }}
                                >Error!!! RETRY
                            </Button>
         }else{
             renderButton = <Button className='btn' >SAVED</Button >
         }

        const buttonRender=this.props.btnIU ?saveButton: renderButton;
    
        let buttonDisplay =null;
        if(this.props.album){
            if (!this.props.loading) {
                buttonDisplay = buttonRender
            }
        }
        return(
            <div className="album">
            <h2 className="heading-2">Track List</h2>
                { albumTracks }
                {buttonDisplay}
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
        saveloading: state.saveAlbum.loading,
        btnIU: state.UIcontrol.btnDisplay,
        error: state.saveAlbum.error

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onselectMusic: selectedMusic => dispatch(actions.selectMusic(selectedMusic)),
        onupdatePlayer: url => dispatch(actions.updatePlayer(url)),
        onalbumInit: () => dispatch(actions.albumInit()), //GETTING THE ALBUM DATA FROM LOCAL STORAGE
        onsaveAlbum: (albumData, token) => dispatch(actions.saveAlbum(albumData, token)),
        onsavingBtn: () => dispatch(actions.btnSaving())

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumTracks);