import React from "react";
import {titleTrimmer} from "../../../shared/utility";


import './AlbumTrackList.css';

const albumTrackList = (props) => {
    let list = null;
    if (props.album){
        list = props.album.tracks.data;

    }

    const dataArray = [];
    for (let key in list) {
        dataArray.push(list[key]);
    }


    const displayData = dataArray.map((key , index) => {
        return (
            <li key={key.id} className="track__pointer" onClick={() => props.selectedMusicHandler(key)}>
                <div className="track__link">
                    <div className="track__data">
                        <h2 className="track__name">
                            <div className="track__ball">
                                <span className="track__num">
                                    {index + 1}
                                </span>
                            </div> 
                            {titleTrimmer(key.title, 20)}
                        </h2>
                    </div>
                </div>
            </li>
        );
    });

    return (
        <React.Fragment>
            {props.album ?<ul className="album__list">
                             {displayData}
                            </ul> : null}
        </React.Fragment>
    )

}



export default albumTrackList;
