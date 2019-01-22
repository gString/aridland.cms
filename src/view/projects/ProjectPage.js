import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import ProjectList from "./ProjectList";
import {connect} from "react-redux";
import {noCountriesYetSelector, noProjectsYetSelector} from "../../model/selectors";
import EnhancedProjectForm from "./form/ProjectEdit";

class ProjectPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <p>Currently: </p>
                <ProjectList />
                <EnhancedProjectForm />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        noProjects: noProjectsYetSelector(state),
        noCountries: noCountriesYetSelector(state)
    }
}



// ProjectPage.PropTypes = {};

export default connect(
    mapStateToProps,
)(ProjectPage);