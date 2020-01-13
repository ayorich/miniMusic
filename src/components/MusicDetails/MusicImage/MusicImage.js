import React from "react";
import {  titleTrimmer } from '../../../shared/utility';

import './MusicImage.css';


const musicImage = (props) => {
    let imageDisplay= null;
    if(props.selectSongData){
        imageDisplay= (
                <figure className="music__fig">
                    <img src={props.selectSongData.album.cover_xl} alt={props.selectSongData.title} className="music__img" />
                    <h1 className="music__title">
                    <span>{titleTrimmer(props.selectSongData.title, 30, '')}</span>
                    </h1>
                </figure>
                    
            )
    }
    return imageDisplay;
}

export default musicImage;