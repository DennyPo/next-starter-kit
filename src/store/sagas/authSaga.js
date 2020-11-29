import { call, takeLeading, put } from "redux-saga/effects";
import cookies from "js-cookie";
import Router from "next/router";

import { LOGIN, loginSuccess, LOGOUT, logoutSuccess } from "../actions/authActions";
import actionHelper from "../../utils/actionHelper";
import { signinApi } from "../../../api/auth";
import { HOME_PAGE, SIGNIN_PAGE } from "../../config/url";
import { TOKEN_NAME } from "../../config/config";

function* login(action) {

  try {
    const { user, token } = yield call(signinApi, action.payload);

    if (token) {
      cookies.set(TOKEN_NAME, token);

      yield put(loginSuccess(user));

      Router.push(HOME_PAGE);
    }

  } catch (e) {

  }
}

function* logout() {
  cookies.remove(TOKEN_NAME);

  yield put(logoutSuccess());

  Router.replace(SIGNIN_PAGE);
}

export default function* authSaga() {
  yield takeLeading(actionHelper(LOGIN), login);
  yield takeLeading(actionHelper(LOGOUT), logout);
};
