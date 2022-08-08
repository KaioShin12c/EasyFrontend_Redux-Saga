import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { fork, take, call, delay, put } from "redux-saga/effects";

import {
  login,
  LoginPayload,
  logout,
  loginSuccess,
  loginFailed,
} from "./authSlice";

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000);
    localStorage.setItem("access_token", "fake_token");
    yield put(loginSuccess({ id: 1, name: "dat nguyen" }));
  } catch (error: any) {
    yield put(loginFailed(error.message));
  }
  // redirect to dashboard admin page
  yield put(push("/admin"));
}

function* handleLogout() {
  localStorage.removeItem("access_token");
  // redirect to login page
  yield put(push("/login"));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(login.type);
      yield fork(handleLogin, action.payload);
    }
    yield take(logout);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  console.log("authSaga");
  yield fork(watchLoginFlow);
}
