import React from 'react';
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
        <App />
    </Provider>, 
    document.getElementById('root')
);