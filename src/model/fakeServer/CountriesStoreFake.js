import dataFaker from "./DataFaker";
import {callAPI} from "./api.fake";

let countries;

const countriesInit = () => {

    const dataSchema = {
        id: 'id',
        name: 'header',
    }

    countries = dataFaker(5, 3, dataSchema);

}

const getCountries = () => {
    if (!countries) {
        countriesInit();
    }
    return countries;
}

export const getAllCountries = () => {
    return callAPI(getCountries());
}