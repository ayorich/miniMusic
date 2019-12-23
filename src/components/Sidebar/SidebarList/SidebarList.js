import React from "react";

import './SidebarList.css';

const sidebarList = (props)=> {
  // console.log(props.listData)

  const list = props.listData;
  // console.log(list)

  const dataArray = [];
  for (let key in list) {
    dataArray.push(list[key]);
  }
  // console.log(dataArray);
  


  const limitTitle = (title, limit = 12) => {
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


  const displayData = dataArray.map(key => {
    // console.log(key.title)
    // console.log(key)
    return (
      <li key={key.id} className="list__pointer" onClick={() => props.selectedMusicHandler(key)}>
        <div className="results__link">
          <div className="results__data">
            <p className="results__author">Artist : {limitTitle(key.artist.name, 14)}</p>
            <h4 className="results__name">Song Title : {limitTitle(key.title)}</h4>
          </div>
        </div>
      </li>
    );
  });

  return displayData;

}



export default sidebarList;
