import React from 'react'

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false
        }
        this.audio = new Audio(this.props.url.preview)
    }

    componentDidMount() {
       this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }

    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));
    }

    togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.audio.pause();
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play Preview'}</button>
            </div>
        );
    }
}

export default Music;