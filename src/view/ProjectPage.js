import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {getAllProjects} from "../model/ProjectsStoreFake";
import ProjectList from "./ProjectList";

class ProjectPage extends Component {

    constructor(props) {
        super(props);

        //  state
        this.state = {
            projects: {}
        };

        //  Bind functions

    }

    componentDidMount() {
        getAllProjects()
            .then( response => {
                if ( response.ok ) {
                    return response.json
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(
                data => this.setState({projects: data})
            )
            .catch( error => console.log(error));
    }

    render() {
        return (
            <ProjectList projects={this.state.projects}/>
        );
    }
}

// ProjectPage.PropTypes = {};

export default ProjectPage;