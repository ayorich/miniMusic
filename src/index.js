import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import musicListReducer from './store/reducers/musicListBuilder';
import musicDetailsReducer from './store/reducers/musicDetailsBuilder';
import musicPlayerReducer from './store/reducers/musicPlayer';
import musicAlbumReducer from './store/reducers/musicAlbumBuilder';
import authReducer from "./store/reducers/auth";
import UIReducer from "./store/reducers/UIcontrol";
import saveAlbumReducer from "./store/reducers/saveAlbumbuilder";
import fetchAlbumReducer from "./store/reducers/fetchAlbumbuilder";


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  musicListBuilder: musicListReducer,
  musicDetailsBuilder: musicDetailsReducer,
  musicPlayer: musicPlayerReducer,
  musicAlbum: musicAlbumReducer,
  auth: authReducer,
  UIcontrol: UIReducer,
  saveAlbum: saveAlbumReducer,
  fetchAlbums: fetchAlbumReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
