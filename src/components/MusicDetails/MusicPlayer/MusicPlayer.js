import React from 'react'
import { connect } from 'react-redux';

import './MusicPlayer.css';

class Music extends React.Component {
  
    componentDidMount(){
        this.changeMusic();
    }

    componentDidUpdate(){
        this.changeMusic();
    }

    changeMusic = () =>{
                this.refs.audio.pause();
                this.refs.audio.load();
                // this.refs.audio.play();
        }
 
    render() {
        return (
            <div className="audio__container">
                <audio controls ref="audio" className="audio__player">
                    <source src={this.props.musicState.url} />
                </audio>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        musicState: state.musicPlayer,

    };
};


export default connect(mapStateToProps)(Music);