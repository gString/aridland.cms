import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import ProjectList from "./ProjectList";
import {connect} from "react-redux";
import {currentProjectSelector, noCountriesYetSelector, noProjectsYetSelector} from "../../model/selectors";
import EnhancedProjectForm from "./ProjectEditForm";

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
                <EnhancedProjectForm project={this.props.selectedProject} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        noProjects: noProjectsYetSelector(state),
        noCountries: noCountriesYetSelector(state),
        selectedProject: currentProjectSelector(state)
    }
}



// ProjectPage.PropTypes = {};

export default connect(
    mapStateToProps,
)(ProjectPage);