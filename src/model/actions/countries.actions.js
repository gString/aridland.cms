import * as types from "./actionTypes";
import {getAllCountries} from "../fakeServer/CountriesStoreFake";

export const selectCountry = projectID => ({
    type: types.SELECT_PROJECT,
    projectID
});

const getCountries = () => ({
    type: types.REQUEST_COUNTRIES,
});

const loadCountriesError = (error) => ({
    type: types.FAILED_COUNTRIES,
    error
});

const fetchCountriesSuccess = (items) => ({
    type: types.RECEIVE_COUNTRIES,
    items
});

export const fetchCountries = () => async dispatch => {
    console.log('fetchCountries');
    try {
        dispatch(getCountries());
        const response = await getAllCountries();
        dispatch(fetchCountriesSuccess(response.json));
    } catch(err) {
        console.error(err);
        dispatch(loadCountriesError(err));
    }
}

