import React, {Component} from 'react';
import { connect } from 'react-redux';

import SidebarList from './SidebarList/SidebarList';
import './Sidebar.css'

class Sidebar extends Component {
  

      render(){
        const listData = [...this.props.list];

        return (
          <div className="results">
            <ul className="results__list">
              <SidebarList listData={listData}/>
            </ul>
          </div>
        );
      }
}

const mapStateToProps = state => {
  return {
    list: state.musicBuilder,

  };
};

export default connect(mapStateToProps)(Sidebar);
