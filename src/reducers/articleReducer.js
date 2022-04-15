import { SET_LOADING_STATUS, GET_ARTICLES } from "../actions/actionType";

export const initState = {
    articles: [],
    loading: false,             //initial state loading is false
};

const articleReducer = (state=initState, action) => {
    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload,
            }
        case SET_LOADING_STATUS:
            return {
                ...state,
                loading: action.status,
                // Means return whatever d state previously was and add this new loading state on top of that. cos in redux nothing is being mutated.
            };
        default:
            return state;
    }
};

export default articleReducer;