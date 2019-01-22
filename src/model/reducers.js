import {combineReducers} from "redux";
import * as types from "./actions/actionTypes";

const selected = (state = { project:'dah'}, action) => {
    switch (action.type) {
        case types.SELECT_PROJECT:
            return Object.assign(state, {project: action.projectID});
        default: return state;
    }
};

const projects  = (state = {
    isLoading: true,
    failed: false,
    errorMsg: '',
    items: {}
}, action) => {
    switch (action.type) {
        case types.REQUEST_PROJECTS:
            return Object.assign({}, state, {
                isLoading: true,
                failed: false,
                errorMsg: ''
            });
        case types.FAILED_PROJECTS:
            return Object.assign({}, state, {
                isLoading: true,
                failed: false,
                error: action.error
            });
        case types.RECEIVE_PROJECTS:
            return Object.assign({}, state, {
                isLoading: false,
                failed: false,
                errorMsg: '',
                items: action.items
            });
        default: return state;
    }
}

const countries  = (state = {
    isLoading: true,
    failed: false,
    errorMsg: '',
    items: {}
}, action) => {
    switch (action.type) {
        case types.REQUEST_COUNTRIES:
            return Object.assign({}, state, {
                isLoading: true,
                failed: false,
                errorMsg: ''
            });
        case types.FAILED_COUNTRIES:
            return Object.assign({}, state, {
                isLoading: true,
                failed: false,
                error: action.error
            });
        case types.RECEIVE_COUNTRIES:
            return Object.assign({}, state, {
                isLoading: false,
                failed: false,
                errorMsg: '',
                items: action.items
            });
        default: return state;
    }
}



export default combineReducers({
    selected,
    projects,
    countries
});