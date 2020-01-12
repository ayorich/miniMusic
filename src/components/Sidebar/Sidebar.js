import React, {Component} from 'react';
import { connect } from 'react-redux';

import SidebarList from './SidebarList/SidebarList';
import * as actions from '../../store/actions/index';
import Button from '../UI/Button/Button';
import Spinner from "../UI/Spinner/Spinner";


import './Sidebar.css'

class Sidebar extends Component {

  componentDidMount(){
        const songID = localStorage.getItem('songID');

    if (songID ) {
      console.log(songID)
      // const resultsArr = Array.from(document.querySelectorAll('.results__link'));
      // console.log(resultsArr)
      document.querySelector(`.results__link[id*="${songID}"]`).classList.add('results__link--active');
    }
  }
  buttonRender = () => {
    if (this.props.next && !this.props.prev) {
      return (
        <Button
          className="btn btn--next"
          onClick={() => this.props.onnextList(this.props.next)}
        >
          NEXT
        </Button>
      );
    } else if (this.props.next && this.props.prev) {
      return (
        <React.Fragment>
          <Button
            className="btn btn--next"
            onClick={() => this.props.onnextList(this.props.next)}
          >
            NEXT
          </Button>
          <Button
            className="btn btn--prev"
            onClick={() => this.props.onprevList(this.props.prev)}
          >
            PREV
          </Button>
        </React.Fragment>
      );
    } else if (this.props.prev && !this.props.next) {
      return (
        <Button
          className="btn btn--prev"
          onClick={() => this.props.onprevList(this.props.prev)}
        >
          PREV
        </Button>
      );
    }
  };
 
  
  selectedMusicHandler = ( selectedMusic) => {
    this.props.onselectMusic(selectedMusic);
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
      el.classList.remove('results__link--active');
    });
    document.querySelector(`.results__link[id*="${selectedMusic.id}"]`).classList.add('results__link--active');

    this.props.onupdatePlayer(selectedMusic.preview);
  };

  render() {
    let list = <ul className="searchbar__list">
                  <SidebarList
                    listData={this.props.listData}
                    selectedMusicHandler={this.selectedMusicHandler}
                  />
                </ul>
    if (this.props.loading) {
      list = <Spinner />
    }

    return (
      <React.Fragment>
        <div className="searchbar">
            {list}
          <div className="searchbar__pages">
            {!this.props.loading? this.buttonRender():null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    listData: state.musicListBuilder.data,
    next: state.musicListBuilder.next,
    prev: state.musicListBuilder.prev,
    loading: state.musicListBuilder.loading,
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
