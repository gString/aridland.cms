import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {projectsSelector} from "../../model/selectors";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({projects}) => {
/*
    const handleClick = () => {
        props.clickHandler(props.class);
    };
*/
    console.log('projects',projects);
    return (
        <ul>{
            Object.keys(projects).map( key => <li key={key}><ProjectListItem item={projects[key]}/></li> )
        }</ul>
    )
};

ProjectList.propTypes = {
    'text': PropTypes.string,
    'class': PropTypes.string,
    'clickHandler': PropTypes.func
};

const mapStateToProps = state => {
    return {
        projects: projectsSelector(state)
    }
};

export default connect(
    mapStateToProps,
)(ProjectList);