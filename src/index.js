import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from "react-redux";

import CMSapp from "./CMSapp";
import rootReducer from './model/reducers';

const store = createStore(rootReducer, {});

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}><CMSapp/></Provider>
    </BrowserRouter>,
    document.getElementById('js-root')
);
