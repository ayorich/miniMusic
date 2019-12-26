import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { searchInstance as axios } from '../../axios-base';

import MusicImage from './MusicImage/MusicImage';
import MusicDataDisplay from './MusicDataDisplay/MusicDataDisplay';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions/index';



import './MusicDetails.css'

class MusicDetails extends Component {
    state={
        textContent: 'View Album',
        authRedirect:null,
    }
    componentDidMount(){
        if (this.props.isAuthenticated && this.props.selectSong ){
            this.props.onviewAlbum(this.props.selectSong.album.id)
        }
    }
    mouseOver = () =>{
        if (!this.props.isAuthenticated){
            this.setState({ textContent: '  LOG IN  '}) // Space leave around login for styling purpose
        }
    }
    mouseOut = () => {
        if (!this.props.isAuthenticated) {
        this.setState({ textContent: 'View Album' })}

    }
    
  
    onButtonClicked =  (selectSong) => {
        if (this.props.isAuthenticated){
            return this.props.onviewAlbum(selectSong.album.id)
        }
        this.setState({ authRedirect: <Redirect to={'/auth'} /> })
    }
    
    render(){
        const selectSong = this.props.selectSong;
        return(
            <div className="musicDetials">
                {this.state.authRedirect}
                <MusicImage selectSongData={selectSong}/>
                {selectSong ? <MusicPlayer url={selectSong}/> : null}
                {selectSong? <MusicDataDisplay 
                                selectSongData={selectSong} 
                                displayType={this.props.displayType} /> : null}
                {selectSong? <Button 
                                className='btn btn-signin'
                                onClick={() => this.onButtonClicked(selectSong)}
                                onMouseOver={() => this.mouseOver()}
                                onMouseOut={() => this.mouseOut()}
                >{this.state.textContent}</Button> : null}
            </div>
        )
    }
} 



const mapStateToProps = state => {
    return {
        selectSong: state.musicDetailsBuilder.song,
        displayType: state.musicDetailsBuilder.displayType,
        musicState: state.musicPlayer,
        isAuthenticated: state.auth.token !== null,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onviewAlbum: id => dispatch(actions.viewAlbum(id)),
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(MusicDetails, axios));