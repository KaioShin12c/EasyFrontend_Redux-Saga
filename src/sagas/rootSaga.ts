import { all } from "redux-saga/effects";

import { watchIncrementAsync } from "./counter/counterSaga";

export function* rootSaga() {
  console.log("rootSaga");
  yield all([watchIncrementAsync()]);
}
