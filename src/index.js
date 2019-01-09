import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import CMSapp from "./CMSapp";

ReactDOM.render(
    <BrowserRouter><CMSapp/></BrowserRouter>,
    document.getElementById('js-root')
);
