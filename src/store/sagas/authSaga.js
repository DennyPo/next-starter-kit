import { call, takeLeading, put } from "redux-saga/effects";
import cookies from "js-cookie";

import { LOGIN, loginSuccess, LOGOUT, logoutSuccess } from "../actions/authActions";
import actionHelper from "../../utils/actionHelper";
import { signinApi } from "../../../api/auth";
import { TOKEN_NAME } from "../../config/config";

function* login(action) {

  try {
    const { user, token } = yield call(signinApi, action.payload);

    if (token) {
      cookies.set(TOKEN_NAME, token);

      yield put(loginSuccess(user));
      action.onSuccess();
    }

  } catch (e) {

  }
}

function* logout() {
  cookies.remove(TOKEN_NAME);

  yield put(logoutSuccess());
}

export default function* authSaga() {
  yield takeLeading(actionHelper(LOGIN), login);
  yield takeLeading(actionHelper(LOGOUT), logout);
};
