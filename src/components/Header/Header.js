import React , {Component} from 'react';
import { connect } from 'react-redux';

import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'

import './Header.css';


class Header extends Component{
    render(){
        return(
            <div className="header">
                <Logo />
                <SearchBar />
                <NavigationItems isAuthenticated={this.props.isAuthenticated} />
            </div>
        )
    }

} 
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};


export default connect(mapStateToProps)(Header);