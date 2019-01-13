import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import ProjectList from "./ProjectList";
import {connect} from "react-redux";
import {noProjectsYetSelector} from "../../model/selectors";
import {fetchProjects} from "../../model/actions";

class ProjectPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { noProjects, dispatch } = this.props;
        if (noProjects) {
            dispatch(fetchProjects())
        }
    }

    render() {
        return (
            <div>
                <p>Currently: </p>
                <ProjectList />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        noProjects: noProjectsYetSelector(state)
    }
}



// ProjectPage.PropTypes = {};

export default connect(
    mapStateToProps,
)(ProjectPage);