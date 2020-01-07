import React, { Component } from "react";
import { connect } from 'react-redux';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
import MusicBuilder from '../MusicBuilder/MusicBuilder';



import { Route, Switch, Redirect } from 'react-router-dom';

const asyncAlbumList = asyncComponent(() => {
    return import('../AlbumList/AlbumList');
});

const asyncLogout = asyncComponent(() => {
    return import('../Auth/Logout/Logout');
});

const asyncAuth = asyncComponent(() => {
    return import('../Auth/Auth');
});

class RouterRender extends Component{

    render(){
        let routes = (
            <Switch>
                <Route path="/auth" component={asyncAuth} />
                <Route path="/" exact component={MusicBuilder} />
                <Redirect to="/" />
            </Switch>
        );
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/album" component={asyncAlbumList} />
                    <Route path="/logout" component={asyncLogout} />
                    <Route path="/" exact component={MusicBuilder} />
                    <Redirect to="/" />
                </Switch>
            );
        }
        return routes
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

    

export default connect(mapStateToProps)(RouterRender);