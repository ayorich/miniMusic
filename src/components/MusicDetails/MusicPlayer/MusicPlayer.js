import React from 'react'
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

class Music extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     play: false
    //     // }
    // }
    audio = new Audio(this.props.musicState.url)

    componentDidMount() {
        this.audio.addEventListener('ended', () => this.props.onstopMusic());
        console.log('mount', this.props.musicState);

    }

    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.props.onstopMusic());
        console.log('umount', this.props.musicState);

    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.musicState.url !== prevProps.musicState.url) {
    //     console.log(new Audio(this.props.musicState.url));

    //         new Audio(this.props.musicState.url)

    //     }
    // }
    // togglePlay = () => {
    //     this.setState({ play: !this.state.play }, 
    //         () => {    this.state.play ? this.audio.play() : this.audio.pause();
    //     });
    // }

    togglePlay = () => {
        // console.log(new Audio(this.props.musicState.url));
        this.props.ontogglePlay(!this.props.musicState.play);
        !this.props.musicState.play ? this.audio.play() : this.audio.pause();
        // console.log(!this.props.musicState.play)
    }

    render() {
        // console.log(this.props.musicState);
        return (
            <div>
                <audio controls ref="audio">
                    <source src={this.props.musicState.url} />
                </audio>
                {/* <button onClick={this.togglePlay}>{this.props.musicState.play ? 'Pause' : 'Play Preview'}</button> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        musicState: state.musicPlayer,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onstopMusic: () => dispatch(actions.stopMusic()),
        ontogglePlay: (playState) => dispatch(actions.togglePlayer(playState))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);