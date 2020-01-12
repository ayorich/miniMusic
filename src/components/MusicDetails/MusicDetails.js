import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import withErrorInterceptor from '../../hoc/withErrorInterceptor/withErrorInterceptor';
import { searchInstance as axios } from '../../axios-base';

import MusicImage from './MusicImage/MusicImage';
import MusicDataDisplay from './MusicDataDisplay/MusicDataDisplay';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';




import './MusicDetails.css'

class MusicDetails extends Component {
    constructor(props) {
        super(props)
        this.state={
        textContent: 'View Album',
        authRedirect:null,
    }
        // Creating the ref
    this.musicDetailTopRef = React.createRef()
    }
    
  

    componentDidMount() {
        if (this.props.isAuthenticated && this.props.selectSong) {
            //GET THE PREVIOUS ALBUMID ONCE MOUNTED || REMOUNTED 

            const albumId = parseInt(localStorage.getItem('albumID'))
            //SET THE NEW ALBUMID ONCE MOUNTED || REMOUNTED 
            localStorage.setItem('albumID', this.props.selectSong.album.id)
            if (albumId !== this.props.selectSong.album.id) {
                this.props.onviewAlbum(this.props.selectSong.album.id) // ACTION DISPATCHED AND API QUERY
                this.props.onbtnToSave() // to change button state on mount
                this.onMountSpinner = <Spinner/> //SPINNER ONCE COMPONENT IS MOUNTED
            }
        }
    }

    componentDidUpdate(){
        this.onMountSpinner=null //UNLOAD SPINNER ON UPDATING
    }

    scrollToTop = () => {
        this.musicDetailTopRef.current.scrollIntoView({ behavior: 'smooth' })
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
            const albumId = parseInt(localStorage.getItem('albumID'))
            this.scrollToTop()
            localStorage.setItem('albumID', this.props.selectSong.album.id)
            if (albumId !== selectSong.album.id){
                //TO RETURN ONCE AUTH IS TRUE
                 this.props.onviewAlbum(selectSong.album.id)
                return this.props.onbtnToSave() 
            }
            
        }
        // SETTING STATE TO REDIRECT TO /auth IF NOT AUTH
        this.setState({ authRedirect: <Redirect to={'/auth'} /> })
    }
    
    render(){
        const selectSong = this.props.selectSong;
        const mountSpinner = (
                        <div className='spinnerModal'>
                            {this.onMountSpinner}
                         </div>
            )

        return(
            <div className="musicDetials" ref={this.musicDetailTopRef}>
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
        onbtnToSave: () => dispatch(actions.btnToSave())

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorInterceptor(MusicDetails, axios));