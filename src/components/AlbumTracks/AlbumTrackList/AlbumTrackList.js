import React from "react";

import './AlbumTrackList.css';

const albumTrackList = (props) => {
    console.log(props.trackData)

    const list = props.trackData[0].tracks.data;
    // console.log(list)

    const dataArray = [];
    for (let key in list) {
        dataArray.push(list[key]);
    }
    // console.log(dataArray);



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
        // console.log(key.title)
        // console.log(key)
        return (
            <li key={key.id} className="track__pointer" onClick={() => props.selectedMusicHandler(key)}>
                <div className="track__link">
                    <div className="track__data">
                        <h2 className="track__heading">Track {index + 1} : </h2>
                        <h2 className="track__name">{limitTitle(key.title)}</h2>
                    </div>
                </div>
            </li>
        );
    });

    return displayData;

}



export default albumTrackList;
