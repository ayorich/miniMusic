import React from "react";

import './MusicDataDisplay.css';
import SquareTab from '../../UI/SquareTab/SquareTab'


const musicDataDisplay = (props) => {
    // console.log(props);
    let detailsDisplay = null;
    if (props.selectSongData) {
        // console.log(props.selectSongData);

        detailsDisplay = (
            <div className="recipe__details">
                <SquareTab detail={props.selectSongData.artist.name}>ARTIST(S)</SquareTab>
                <SquareTab detail={props.selectSongData.title}>TITLE</SquareTab>
                <SquareTab detail={props.selectSongData.duration}>DURATION</SquareTab>
                <SquareTab detail={props.selectSongData.album.title}>ALBUM TITLE</SquareTab>
                <SquareTab detail={props.selectSongData.rank}>SONG RANKING</SquareTab>
            </div>

        )
    }
    return detailsDisplay;
}

export default musicDataDisplay;