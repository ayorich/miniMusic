import React from 'react';
import SidebarList from './SidebarList/SidebarList';
import './Sidebar.css'

const sidebar = () => {
    return (
      <div className="results">
        <ul className="results__list">
            <SidebarList/>
        </ul>
      </div>
    );
}

export default sidebar;
