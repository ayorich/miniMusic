import React from "react";
import {titleTrimmer} from "../../../shared/utility";
import './SidebarList.css';

const sidebarList = (props)=> {
  // console.log(props.currentId)

  const list = props.listData;

  const dataArray = [];
  for (let key in list) {
    dataArray.push(list[key]);
  }
  
  let displayData = dataArray.map(key => {
    return (
      <li key={key.id} className="list__pointer">
        <div className="results__link " id={key.id} onClick={() => {
                                                                  props.selectedMusicHandler(key);
                                                                  props.selectedMusicHighlighted(key.id); }
                                                            }>
            <p className="results__author">Artist : {titleTrimmer(key.artist.name, 14)}</p>
            <h4 className="results__name">Song Title : {titleTrimmer(key.title, 12)}</h4>
        </div>
      </li>
    );
  });
// if(props.currentId){
//   document.querySelector(`.results__link[id*="${props.currentId}"]`).classList.add('results__link--active');
// }
  return displayData;

}



export default sidebarList;
