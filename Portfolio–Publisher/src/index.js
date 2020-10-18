import React from 'react';
import { Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import reducers from "./Reducers/RootReducer.js";

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const theStore = createStore(
    reducers,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={theStore}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);