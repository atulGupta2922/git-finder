import { useReducer } from "react";
import axios from "axios";
import {
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER
} from "../types";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";

const GithubState = props => {
    const initialState = {
        users: [],
        loading: false,
        user: {}
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    /**
     * Makes API call to fetch user by name
     * 
     * @param {*} val 
     * @returns 
     */
    const searchUsers = async val => {
        setLoading();
        const response = await axios.get(`${process.env.REACT_APP_GIT_BASE_URL}search/users?q=${val}&client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_CLIENT_SECRET}`)
        dispatch({
            type: SEARCH_USER,
            payload: response.data.items
        })
        return;
    }

    /**
     * Clears users state
     */
    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        });
    }

    const getUser = async login => {
        setLoading();
        const res = await axios.get(`${process.env.REACT_APP_GIT_BASE_URL}users/${login}?client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_CLIENT_SECRET}`);
        dispatch({
            type: GET_USER,
            payload: res.data
        });
    }    

    const setLoading = () => dispatch({
        type: SET_LOADING
    });
    return (<GithubContext.Provider
        value={{
            users: state.users,
            loading: state.loading,
            user: state.user,
            searchUsers,
            clearUsers,
            getUser
        }}>
            {props.children}    
    </GithubContext.Provider>)
}
export default GithubState;