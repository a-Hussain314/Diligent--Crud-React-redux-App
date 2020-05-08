import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './Components/App';
import combineReducers from './Reducers'

// 859722029707-h8ob9nhohn4qrqvrnh8ml2dsk06inqjd.apps.googleusercontent.com

// 1046924416809-qrul5vndoaifg2k2hl8i3bk1bv56buhd.apps.googleusercontent.com      rv
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(combineReducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={myStore}>
        <App/>
     </Provider>
    ,document.getElementById('root'));

