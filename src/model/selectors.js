import {createSelector} from "reselect";
import {isObjEmpty} from "../utils";

const getCurrentProject = state => state.selected.project;

export const currentProject = createSelector(
    getCurrentProject,
    projectID => {
        return projectID;
    }
);

const getPorjects = state => state.projects;
export const projectsSelector = createSelector(
    getPorjects,
    projects => projects.items
);

export const noProjectsYetSelector = createSelector(
    getPorjects,
    projects => isObjEmpty(projects.items) ? true : false
);
