import React from "react";

import './MusicDataDisplay.css';
import SquareTab from '../../UI/SquareTab/SquareTab'


const musicDataDisplay = (props) => {
    let detailsDisplay = null;
    
    const time = props.selectSongData.duration;
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    function str_pad_left(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    const finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);

    const listDisplay = (
            <div className="recipe__details">
                <SquareTab detail={props.selectSongData.artist.name}>ARTIST(S)</SquareTab>
                <SquareTab detail={props.selectSongData.title}>TITLE</SquareTab>
                <SquareTab detail={finalTime}>DURATION</SquareTab>
                <SquareTab detail={props.selectSongData.album.title}>ALBUM TITLE</SquareTab>
                <SquareTab detail={props.selectSongData.rank}>SONG RANKING</SquareTab>
            </div>)

        
         const albumDisplay =(
              <div className="recipe__details">
                <SquareTab detail={props.selectSongData.artist.name}>ARTIST(S)</SquareTab>
                <SquareTab detail={props.selectSongData.album.title}>ALBUM TITLE</SquareTab>
                 <SquareTab detail={finalTime}>DURATION</SquareTab>
                 <SquareTab detail={props.selectSongData.release_date}>RELEASED DATE</SquareTab>
                 <SquareTab detail={props.selectSongData.label}>LABEL</SquareTab>
            </div>)
    detailsDisplay = props.displayType ? albumDisplay : listDisplay;
    return detailsDisplay;
}

export default musicDataDisplay;