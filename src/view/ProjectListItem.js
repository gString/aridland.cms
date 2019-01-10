import React from 'react';
import PropTypes from 'prop-types';
import {selectProject} from "../model/actions";
import {connect} from "react-redux";

const ProjectListItem = ({ handleClick, item }) => {
    return (
        <button onClick={() => handleClick(item.id)}>
            {item.head.ENG}
        </button>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: id => dispatch(selectProject(id))
    }
}

ProjectListItem.propTypes = {
    'item': PropTypes.object,
    'class': PropTypes.string,
    'clickHandler': PropTypes.func
};

export default connect(
    undefined,
    mapDispatchToProps
)(ProjectListItem);