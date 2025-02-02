import { CLEAR_USERS, GET_USER, SEARCH_USER, SET_LOADING } from "../types";

const githubReducer = (state, action) => {
    switch(action.type) {
        case SEARCH_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default githubReducer;