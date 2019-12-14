import React, {Component} from 'react';
import { connect } from 'react-redux';
import MusicImage from './MusicImage/MusicImage';
import MusicDataDisplay from './MusicDataDisplay/MusicDataDisplay';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import Button from '../UI/Button/Button';



import './MusicDetails.css'

class MusicDetails extends Component {


    render(){

        // console.log(this.props.selectSong[0]);
        const selectSong = this.props.selectSong[0];
        return(
            <div className="musicDeatials">
                <MusicImage selectSongData={selectSong}/>
                {selectSong ? <MusicPlayer url={selectSong}/> : null}
                <MusicDataDisplay selectSongData={selectSong}/>
                {selectSong? <Button>Add to Playlist</Button> : null}
            </div>
        )
    }
} 



const mapStateToProps = state => {
    return {
        selectSong: state.musicDetailsBuilder,
        musicState: state.musicPlayer,

    };
};

export default connect(mapStateToProps)(MusicDetails);