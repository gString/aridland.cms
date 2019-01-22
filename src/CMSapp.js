import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import ProjectPage from "./view/projects/ProjectPage";
import {connect} from "react-redux";
import {noCountriesYetSelector, noProjectsYetSelector} from "./model/selectors";
import {fetchProjects} from "./model/actions/projects.actions";
import {fetchCountries} from "./model/actions/countries.actions";

class CMSapp extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { noProjects, noCountries, dispatch } = this.props;
        if (noProjects) {
            dispatch(fetchProjects())
        }
        if (noCountries) {
            dispatch(fetchCountries())
        }
    }

    render() {
        return (
        <main>
            <Switch>
                <Route exact path='/' component={ProjectPage}/>
            </Switch>
        </main> )
    }
}

const mapStateToProps = state => {
    return {
        noProjects: noProjectsYetSelector(state),
        noCountries: noCountriesYetSelector(state)
    }
}

export default connect(
    mapStateToProps,
)(CMSapp);