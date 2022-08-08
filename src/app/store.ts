import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "app/rootSaga";
import authReducer from "features/auth/authSlice";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

const rootReducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware),
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
