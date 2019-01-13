import * as types from "./actionTypes";
import {getAllProjects} from "./ProjectsStoreFake";

export const selectProject = projectID => ({
    type: types.SELECT_PROJECT,
    projectID
});

export const getProjects = () => ({
    type: types.REQUEST_PROJECTS,
});

export const loadDataError = (error) => ({
    type: types.FAILED_PROJECTS,
    error
});

export const fetchDataSuccess = (items) => ({
    type: types.RECEIVE_PROJECTS,
    items
});

export const fetchProjects = () => async dispatch => {
    console.log('fetchProjects');
    try {
        dispatch(getProjects());
        const response = await getAllProjects();
        dispatch(fetchDataSuccess(response.json));
    } catch(err) {
        console.error(err);
        dispatch(loadDataError(err));
    }
}

