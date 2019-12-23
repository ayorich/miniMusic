import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'

import './Header.css';


const header = () => {


    return (
        <div className="header">
            <Logo/>
            <SearchBar/>
            <NavigationItems/>
        </div>
    );

};

export default header;