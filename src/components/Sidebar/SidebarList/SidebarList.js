import React from "react";

import './SidebarList.css';

const sidebarList = (props)=> {
  console.log(props.listData)

  const list = props.listData[0].data;
  console.log(list)

  const dataArray = [];
  for (let key in list) {
    dataArray.push(list[key]);
  }
  // console.log(dataArray);
  
  console.log(dataArray);

  
  const titleTrim = (title) =>{
      let titleSplit = title.split('(')[0];
     if(titleSplit.length >= 15){
       titleSplit = titleSplit.slice(0, 15) + ' ...'
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
            <p className="results__author">Artist : {key.artist.name}</p>
            <h4 className="results__name">Song Title : {titleTrim(key.title)}</h4>
          </div>
        </div>
      </li>
    );
  });

  return displayData;

}



export default sidebarList;
