import {combineReducers} from "redux";
import {SELECT_PROJECT} from "./actions";

const selected = (state = {}, action) => {
    switch (action.type) {
        case SELECT_PROJECT:
            return Object.assign(state, {project:action.projectID});
        default: return state;
    }
};

export default combineReducers({
    selected,
});