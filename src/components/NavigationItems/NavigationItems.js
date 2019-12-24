import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link="/" exact>Musify</NavigationItem>
         <NavigationItem link="/album">Album</NavigationItem>
        {!props.isAuthenticated?<NavigationItem link="/auth">Log in</NavigationItem>:
         <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default navigationItems;