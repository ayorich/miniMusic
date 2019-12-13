import React, {Component} from 'react';
import { connect } from 'react-redux';
import MusicImage from './MusicImage/MusicImage';
import MusicDataDisplay from './MusicDataDisplay/MusicDataDisplay';
import MusicPlayer from './MusicPlayer/MusicPlayer';



import './MusicDetails.css'

class MusicDetails extends Component {
    render(){

        // console.log(this.props.selectSong[0]);
        const selectSong = this.props.selectSong[0];
        // const audio = new Audio(this.props.musicState.url)
        return(
            <div className="musicDeatials">
                <MusicImage selectSongData={selectSong}/>
                <p>passs.....</p>
                {selectSong? <MusicPlayer url={selectSong }/> : null}
                {/* <audio ref={myRef} src={this.props.selectSong.preview} autoPlay /> */}
                <MusicDataDisplay selectSongData={selectSong}/>
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