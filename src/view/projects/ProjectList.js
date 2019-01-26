import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {currentProjectSelector, projectsSelector} from "../../model/selectors";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({projects, selected}) => (
    <ul>{
        Object.keys(projects).map( key => <li key={key}><ProjectListItem item={projects[key]}/></li> )
    }</ul>
);

ProjectList.propTypes = {
    'text': PropTypes.string,
    'class': PropTypes.string,
    'clickHandler': PropTypes.func
};

const mapStateToProps = state => {
    return {
        projects: projectsSelector(state),
        selected: currentProjectSelector(state)
    }
};

export default connect(
    mapStateToProps,
)(ProjectList);