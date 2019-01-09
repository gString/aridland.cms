import React from 'react';
import Projects from "./view/Projects";
import { Switch, Route } from 'react-router-dom';

const CMSapp = () =>
    <main>
        <Switch>
            <Route exact path='/' component={Projects}/>
        </Switch>
    </main>

export default CMSapp;