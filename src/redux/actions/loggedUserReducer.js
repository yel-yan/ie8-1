/*action*/

export const GET_LOGGED_USER = "GET_LOGGED_USER";
export const SET_LOGGED_USER = "SET_LOGGED_USER";

export const getLoggedUser = () => {
    return {
        type: GET_LOGGED_USER
    }
}

export const login = () => {
    return {
        type: SET_LOGGED_USER,
        logged: true
    }
}

export const logout = () => {
    return {
        type: SET_LOGGED_USER,
        logged: false
    } 
}