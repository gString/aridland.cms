import React from 'react';
import PropTypes from 'prop-types';
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({projects}) => {
/*
    const handleClick = () => {
        props.clickHandler(props.class);
    };
*/
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

export default ProjectList;