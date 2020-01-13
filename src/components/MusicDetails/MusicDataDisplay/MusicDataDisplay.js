import React from "react";

import './MusicDataDisplay.css';
import SquareTab from '../../UI/SquareTab/SquareTab';
import { timeFormatter, titleTrimmer } from '../../../shared/utility';



const musicDataDisplay = (props) => {
    let detailsDisplay = null;
   
    const listDisplay = (
            <div className="musictab__details">
            <SquareTab detail={titleTrimmer(props.selectSongData.artist.name, 30, '')}>ARTIST(S)</SquareTab>
            <SquareTab detail={titleTrimmer(props.selectSongData.title, 30, '')}>TITLE</SquareTab>
            <SquareTab detail={timeFormatter(props.selectSongData.duration)}>DURATION</SquareTab>
            <SquareTab detail={titleTrimmer(props.selectSongData.album.title, 30, '')}>ALBUM TITLE</SquareTab>
                <SquareTab detail={props.selectSongData.rank}>SONG RANKING</SquareTab>
            </div>)

        
         const albumDisplay =(
              <div className="musictab__details">
                 <SquareTab detail={titleTrimmer(props.selectSongData.artist.name,30, '')}>ARTIST(S)</SquareTab>
                 <SquareTab detail={titleTrimmer(props.selectSongData.album.title, 30, '')}>ALBUM TITLE</SquareTab>
                 <SquareTab detail={timeFormatter(props.selectSongData.duration)}>DURATION</SquareTab>
                 <SquareTab detail={props.selectSongData.release_date}>RELEASED DATE</SquareTab>
                 <SquareTab detail={props.selectSongData.label}>LABEL</SquareTab>
            </div>)
    detailsDisplay = props.displayType ? albumDisplay : listDisplay;
    return detailsDisplay;
}

export default musicDataDisplay;