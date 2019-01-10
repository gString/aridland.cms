import dataFaker from "./fakeServer/DataFaker";
import {callAPI} from "./fakeServer/api.fake";

let projects;

const projectsInit = () => {

    const dataSchema = {
        id: 'id',
        head: 'header',
        sub: 'header',
        body: 'text'
    }

    projects = dataFaker(5, 3, dataSchema);

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