import React, {Component} from 'react';
import { connect } from 'react-redux';
import MusicImage from './MusicImage/MusicImage';
import MusicDataDisplay from './MusicDataDisplay/MusicDataDisplay';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions/index';



import './MusicDetails.css'

class MusicDetails extends Component {


    render(){

        console.log(this.props.selectSong[0]);
        const selectSong = this.props.selectSong[0];
        return(
            <div className="musicDetials">
                <MusicImage selectSongData={selectSong}/>
                {selectSong ? <MusicPlayer url={selectSong}/> : null}
                {selectSong ? <MusicDataDisplay selectSongData={selectSong} /> : null}
                {selectSong? <Button className='btn'
                    onClick={() => this.props.onviewAlbum(selectSong.album.id)}
                >View Album</Button> : null}
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

const mapDispatchToProps = dispatch => {
    return {
        onviewAlbum: id => dispatch(actions.viewAlbum(id)),
        

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(MusicDetails);