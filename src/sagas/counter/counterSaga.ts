import { takeEvery, delay, put } from "redux-saga/effects";

import { increment } from "../../pages/Counter/counterSlice";

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: increment.type });
}

export function* watchIncrementAsync() {
  console.log("counterSaga");
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}
