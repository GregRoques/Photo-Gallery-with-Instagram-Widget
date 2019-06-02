import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux things
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from "./Reducers/RootReducer.js";

const theStore = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <Provider store={theStore}>
        <Router>
            <App/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);