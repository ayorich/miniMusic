import React from "react";


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

    const limitTitle = (title, limit = 150) => {
        const titleSplit = title.split('(')[0];

        const newTitle = [];
        if (titleSplit.length > limit) {
            titleSplit.split(' ').reduce((sum, cur) => {
                if (sum + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return sum + cur.length;
            }, 0);

            // return the result
            return `${newTitle.join(' ')} ...`;
        }
        return titleSplit;
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
                            {limitTitle(key.title)}
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
