import React from 'react';
import { Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from "./Reducers/RootReducer.js";

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { trackingId } from './AxiosOrders'
import { get } from 'http';

const history = createBrowserHistory();
ReactGA.initialize(trackingId);
history.listen(location => {
    ReactGA.set({ 
        page: location.pathname
    }); 
    ReactGA.pageview(location.pathname); 
  });


const theStore = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <Provider store={theStore}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);