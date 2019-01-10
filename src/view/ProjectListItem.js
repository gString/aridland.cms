import React from 'react';
import PropTypes from 'prop-types';

const ProjectListItem = props => {
    const handleClick = () => {
        props.clickHandler(props.class);
    };
    return (
        <button title={props.text}
                className={props.class}
                onClick={handleClick}>
            {props.item.head.ENG}
        </button>
    )
};

ProjectListItem.propTypes = {
    'item': PropTypes.object,
    'class': PropTypes.string,
    'clickHandler': PropTypes.func
};

export default ProjectListItem;