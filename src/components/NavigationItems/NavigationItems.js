import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className='NavigationItems'>
        <NavigationItem link="/" exact>Musify</NavigationItem>
         <NavigationItem link="/album">Album</NavigationItem>
        <NavigationItem link="/auth">Authenticate</NavigationItem>
         {/* <NavigationItem link="/logout">Logout</NavigationItem> */}
    </ul>
);

export default navigationItems;