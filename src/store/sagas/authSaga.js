import { call, takeLeading, put } from "redux-saga/effects";
import cookies from "js-cookie";

import { LOGIN, loginSuccess } from "../actions/authActions";
import { fetcher } from "../../utils/fetcher";
import { SIGNING_URL } from "../../config/url";
import actionHelper from "../../utils/actionHelper";

function* login(action) {
  const {
    email,
    password,
    remember
  } = action.payload;

  const params = {
    method: "POST",
    payload: { email, password }
  }

  try {
    const { user, token } = yield call(fetcher, SIGNING_URL, params);

    if (token) {
      cookies.set('Authorization', token);
    }

    yield put(loginSuccess(user));

  } catch (e) {

  }
};

export default function* authSaga() {
  yield takeLeading(actionHelper(LOGIN), login);
};
