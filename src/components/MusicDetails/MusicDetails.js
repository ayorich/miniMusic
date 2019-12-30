import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { searchInstance as axios } from '../../axios-base';

import MusicImage from './MusicImage/MusicImage';
import MusicDataDisplay from './MusicDataDisplay/MusicDataDisplay';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';




import './MusicDetails.css'

class MusicDetails extends Component {
    state={
        textContent: 'View Album',
        authRedirect:null,
        updateME:null,
        
    }
  

    static getDerivedStateFromProps(nextProps, prevState){
        //COMPARING ALBUMID BEFORE AND WHEN MOUNTING AGAIN TO REDUCE REPEATED API QUERY 
        const albumId = parseInt(localStorage.getItem('albumID'))
        if(nextProps.albumId !== albumId){
            // console.log('true')
            return{
                updateME: true //SHOULD QUERY API
            }
        } else {
            // console.log('false')
            return{
                updateME:false // SHOULDNOT QUERY API 
            }
        }
    }

    componentDidMount() {
        if (this.props.isAuthenticated && this.props.selectSong) {
            //SET THE NEW ALBUMID ONCE MOUNTED || REMOUNTED 
            localStorage.setItem('albumID', this.props.selectSong.album.id)
            if (this.state.updateME) {
                this.props.onviewAlbum(this.props.selectSong.album.id) // ACTION DISPATCHED AND API QUERY
                // this.showModal = true //SET SPINNER TO SHOW ON MOUNT
                this.onMountSpinner = <Spinner/> //SPINNER ONCE COMPONENT IS MOUNTED
            }
        }
    }

    componentDidUpdate(){
        this.onMountSpinner=null //UNLOAD SPINNER ON UPDATING
        // this.showModal = false // hide spinner
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
            //TO RETURN ONCE AUTH IS TRUE
            return this.props.onviewAlbum(selectSong.album.id)
            
        }
        // SETTING STATE TO REDIRECT TO /auth IF NOT AUTH
        this.setState({ authRedirect: <Redirect to={'/auth'} /> })
    }
    
    render(){
        const selectSong = this.props.selectSong;
        const mountSpinner = (
                        <div
                             className='spinnerModal'
                            //  style={{
                            //      transform: this.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                            //      opacity: this.showModal ? '1' : '0'
                            //  }}
                            >
                            {this.onMountSpinner}
                         </div>
            )

        return(
            <div className="musicDetials">
                {this.state.authRedirect}
                {mountSpinner}
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
                                disabled={this.props.displayType}
                >{this.state.textContent}</Button> : null}
            </div>
        )
    }
} 



const mapStateToProps = state => {
    return {
        selectSong: state.musicDetailsBuilder.song,
        albumId: state.musicDetailsBuilder.song ? state.musicDetailsBuilder.song.album.id:null,
        displayType: state.musicDetailsBuilder.displayType,
        musicState: state.musicPlayer,
        isAuthenticated: state.auth.token !== null,
        loading: state.musicAlbum.loading,


    };
};

const mapDispatchToProps = dispatch => {
    return {
        onviewAlbum: id => dispatch(actions.viewAlbum(id)),

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(MusicDetails, axios));