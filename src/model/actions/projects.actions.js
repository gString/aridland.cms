import * as types from "./actionTypes";
import {getAllProjects} from "../fakeServer/ProjectsStoreFake";

export const selectProject = projectID => ({
    type: types.SELECT_PROJECT,
    projectID
});

const getProjects = () => ({
    type: types.REQUEST_PROJECTS,
});

const loadProjectsError = (error) => ({
    type: types.FAILED_PROJECTS,
    error
});

const fetchProjectsSuccess = (items) => ({
    type: types.RECEIVE_PROJECTS,
    items
});

export const fetchProjects = () => async dispatch => {
    try {
        dispatch(getProjects());
        const response = await getAllProjects();
        dispatch(fetchProjectsSuccess(response.json));
    } catch(err) {
        console.error(err);
        dispatch(loadProjectsError(err));
    }
}

