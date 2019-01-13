import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {applyMiddleware, createStore} from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import CMSapp from "./CMSapp";
import rootReducer from './model/reducers';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}><CMSapp/></Provider>
    </BrowserRouter>,
    document.getElementById('js-root')
);
