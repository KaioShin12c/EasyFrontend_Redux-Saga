import { PayloadAction } from "@reduxjs/toolkit";
import { fork, take } from "redux-saga/effects";

import { login, LoginPayload, logout } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
  console.log("handle login", payload);
}

function* handleLogout() {
  console.log("handle logout");
}

function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(login.type);
    yield fork(handleLogin, action.payload);

    yield take(logout);
    yield fork(handleLogout);
  }
}

export default function* authSaga() {
  console.log("authSaga");
  yield fork(watchLoginFlow);
}
