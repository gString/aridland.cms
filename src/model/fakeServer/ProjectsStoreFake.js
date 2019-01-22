import dataFaker from "./DataFaker";
import {callAPI} from "./api.fake";

let projects;

const projectsInit = () => {

    const dataSchema = {
        id: 'id',
        name: 'header',
        province: 'header',
        country: 'header',
        rules: { type: 'header', length: 3 },
        size: 'header',
        intro: 'text',
        description: 'text',
        gallery: { type: 'header', length: 6 },
        media: { type: 'header', length: 2 },
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