import { call, takeLeading, put } from "redux-saga/effects";
import cookies from "js-cookie";
import Router from "next/router";

import { LOGIN, loginSuccess } from "../actions/authActions";
import actionHelper from "../../utils/actionHelper";
import { signinApi } from "../../../api/auth";
import { HOME_PAGE } from "../../config/url";

function* login(action) {

  try {
    const { user, token } = yield call(signinApi, action.payload);

    if (token) {
      cookies.set('Authorization', token);

      yield put(loginSuccess(user));

      Router.push(HOME_PAGE);
    }

  } catch (e) {

  }
}

export default function* authSaga() {
  yield takeLeading(actionHelper(LOGIN), login);
};
