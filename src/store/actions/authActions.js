import actionHelper from "../../utils/actionHelper";

// types


export const LOGIN = "LOGIN";

// actions

export const loginRequest = payload => ({
    type: actionHelper(LOGIN),
    payload
});

export const loginSuccess = payload => ({
    type: actionHelper(LOGIN, true),
    payload
});
