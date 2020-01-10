import React from "react";
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

const routerRender = (props) => {
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    let token = null;
    if (expirationDate >= new Date()){
         token = localStorage.getItem('token')
    }

    let routes = (
        <Switch>
            <Route path="/auth" component={asyncAuth} />
            <Route path="/" exact component={MusicBuilder} />
            <Redirect to="/" />
        </Switch>
    );
    if (token !== null || props.isAuthenticated ) {
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




    

export default routerRender;