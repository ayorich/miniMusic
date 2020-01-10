import React from "react";
import {titleTrimmer} from "../../../shared/utility";
import './SidebarList.css';

const sidebarList = (props)=> {

  const list = props.listData;

  const dataArray = [];
  for (let key in list) {
    dataArray.push(list[key]);
  }
 
  const displayData = dataArray.map(key => {
    return (
      <li key={key.id} className="list__pointer" onClick={() => props.selectedMusicHandler(key)}>
        <div className="results__link">
          <div className="results__data">
            <p className="results__author">Artist : {titleTrimmer(key.artist.name, 14)}</p>
            <h4 className="results__name">Song Title : {titleTrimmer(key.title, 12)}</h4>
          </div>
        </div>
      </li>
    );
  });

  return displayData;

}



export default sidebarList;
