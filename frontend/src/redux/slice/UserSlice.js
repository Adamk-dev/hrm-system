import { createSlice } from "@reduxjs/toolkit";
import SignupUser from "../actions/signupAction";
import loginUser from "../actions/login";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    message: [],
    loginData: {},
  },
  reducers: {
    // Reducer comes here
  },
  extraReducers: {
    [SignupUser.fulfilled]: (state, { payload }) => {
      state.message = payload;
    },
    [SignupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [SignupUser.rejected]: (state, { payload }) => {
      state.errorMessage = payload.message;
    },
    // loggin slice
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loginData = { ...payload };
    },
  },
});
export const userSelector = (state) => state.user;
