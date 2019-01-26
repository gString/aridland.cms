import {createSelector} from "reselect";
import {isObjEmpty} from "../utils";

const getCurrentProject = state => state.selected.projectID;
const getProjects = state => state.projects;

export const currentProjectSelector = createSelector(
    getCurrentProject,
    getProjects,
    (projectID, projects) => {
        return projects.items[projectID];
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
export const countriesSelector = createSelector(
    getCountries,
    countries => countries.items
);
export const countriesAsArraySelector = createSelector(
    getCountries,
    countries => {
        return Object.keys(countries.items).map( key => countries.items[key]);
    }
);

export const noCountriesYetSelector = createSelector(
    getCountries,
    countries => isObjEmpty(countries.items) ? true : false
);
