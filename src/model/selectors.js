import {createSelector} from "reselect";
import {isObjEmpty} from "../utils";

const getCurrentProject = state => state.selected.project;
const getProjects = state => state.projects;

export const currentProject = createSelector(
    getCurrentProject,
    getProjects,
    (projectID, projects) => {
        return projects[projectID];
    }
);
export const projectsSelector = createSelector(
    getProjects,
    projects => projects.items
);

export const noProjectsYetSelector = createSelector(
    getProjects,
    projects => isObjEmpty(projects.items) ? true : false
);

const getCountries = state => state.countries;
export const coutriesSelector = createSelector(
    getCountries,
    countries => countries.items
);

export const noCountriesYetSelector = createSelector(
    getCountries,
    countries => isObjEmpty(countries.items) ? true : false
);
