import React from 'react';
import PropTypes from 'prop-types';

const Projects = () => (
    <div>Projects</div>
);

Projects.propTypes = {
    name: PropTypes.string
};
Projects.defaultProps = {
    name: "whatever"
};

export default Projects;