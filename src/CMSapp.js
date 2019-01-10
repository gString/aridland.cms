import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProjectPage from "./view/ProjectPage";

const CMSapp = () =>
    <main>
        <Switch>
            <Route exact path='/' component={ProjectPage}/>
        </Switch>
    </main>

export default CMSapp;