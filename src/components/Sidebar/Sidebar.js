import React, {Component} from 'react';
import { connect } from 'react-redux';

import SidebarList from './SidebarList/SidebarList';
import * as actions from '../../store/actions/index';
import Button from '../UI/Button/Button';


import './Sidebar.css'

class Sidebar extends Component {
  
  
  buttonRender = ()=>{
    if (this.props.list[0].next && !this.props.list[0].prev) {
      return <Button className='btn btn--next'
        onClick={() => this.props.onnextList(this.props.list[0].next)}
              >NEXT</Button>

    } else if (this.props.list[0].next && this.props.list[0].prev) {
      return (
        <React.Fragment>
          <Button className='btn btn--next'
            onClick={() => this.props.onnextList(this.props.list[0].next)}
          >NEXT</Button>
          <Button className='btn btn--prev'
            onClick={()=> this.props.onprevList(this.props.list[0].prev)}
          >PREV</Button>

        </React.Fragment>
      )

    } else if (this.props.list[0].prev && !this.props.list[0].next) {
      return <Button className='btn btn--prev'
        onClick={() => this.props.onprevList(this.props.list[0].prev)}
      >PREV</Button>
    }
  }

  selectedMusicHandler = (selectedMusic) => {
    this.props.onselectMusic(selectedMusic);
    this.props.onupdatePlayer(selectedMusic.preview);
    
  }

      render(){
        const listData = this.props.list;
          // console.log(listData)
        
        return (
          <React.Fragment>
          <div className="results">
            <ul className="results__list">
             {listData.length !== 0? <SidebarList listData={listData} selectedMusicHandler={this.selectedMusicHandler} /> :null}
            </ul>
          <div className="results__pages">
            {listData.length !== 0 ? this.buttonRender() : null}
          </div>
          </div>
          </React.Fragment>
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
    onupdatePlayer: url => dispatch(actions.updatePlayer(url)),
    onnextList: url => dispatch(actions.getnextList(url)),
    onprevList: url => dispatch(actions.getprevList(url)),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
