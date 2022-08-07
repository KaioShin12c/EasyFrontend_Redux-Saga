import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<LoginPayload>) => {
      state.logging = true;
    },
    loginSuccess: (state: AuthState, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state: AuthState, action: PayloadAction<string>) => {
      state.logging = false;
    },
    logout: (state: AuthState) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});
// Actions
export const { login, loginSuccess, loginFailed, logout } = authSlice.actions;
// Selector
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectLogging = (state: any) => state.auth.logging;
// Reducer
export default authSlice.reducer;
