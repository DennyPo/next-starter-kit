import actionHelper from "../../utils/actionHelper";

// types


export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// actions

export const loginRequest = (payload, onSuccess) => ({
    type: actionHelper(LOGIN),
    payload,
    onSuccess
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
