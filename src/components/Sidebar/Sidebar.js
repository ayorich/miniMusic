import React, {Component} from 'react';
import { connect } from 'react-redux';

import SidebarList from './SidebarList/SidebarList';
import * as actions from '../../store/actions/index';


import './Sidebar.css'

class Sidebar extends Component {
  

  selectedMusicHandler = (selectedMusic) => {
    this.props.onselectMusic(selectedMusic);
    this.props.onupdatePlayer(selectedMusic.preview);
    
  }

      render(){
        const listData = this.props.list;
          console.log(listData)
        return (
          <div className="results">
            <ul className="results__list">
             {listData.length !== 0? <SidebarList listData={listData} selectedMusicHandler={this.selectedMusicHandler} /> :null}
            </ul>
          </div>
        );
      }
}

const mapStateToProps = state => {
  return {
    list: state.musicListBuilder,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onselectMusic: selectedMusic => dispatch(actions.selectMusic(selectedMusic)),
    onupdatePlayer: url => dispatch(actions.updatePlayer(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
