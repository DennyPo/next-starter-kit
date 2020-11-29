import actionHelper from "../../utils/actionHelper";

// types


export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// actions

export const loginRequest = payload => ({
    type: actionHelper(LOGIN),
    payload
});

export const loginSuccess = payload => ({
    type: actionHelper(LOGIN, true),
    payload
});

export const logoutRequest = () => ({
    type: actionHelper(LOGOUT)
});

export const logoutSuccess = () => ({
    type: actionHelper(LOGOUT, true)
});
