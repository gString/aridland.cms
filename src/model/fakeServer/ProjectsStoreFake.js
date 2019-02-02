import dataFaker from "./DataFaker";
import {callAPI} from "./api.fake";

let projects;

const projectsInit = () => {

    const dataSchema = {
        id: {type: 'id', single: true},
        name: {type: 'header'},
        province: {type: 'header'},
        country: {type: 'header', single: true},
        rules: {type: 'header', array: 3},
        size: {type: 'header'},
        intro: {type: 'text', array: 2},
        description: {type: 'text', array: 4},
        gallery: {type: 'header', array: 5, single: true},
        media: {type: 'header', array: 5, single: true},
    }

    projects = dataFaker(5, 3, dataSchema);
    console.log(JSON.stringify(projects))

}

const getProjects = () => {
    if (!projects) {
        projectsInit();
    }
    return projects;
}

export const getAllProjects = () => {
    return callAPI(getProjects());
}