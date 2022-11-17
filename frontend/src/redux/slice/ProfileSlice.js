import { createSlice } from "@reduxjs/toolkit";
import ProfileAction from "../actions/ProfileAction";
import ProfileUpdateAction from "../actions/ProfileUpdateAction";

export const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: {},
    fatching: false,
  },
  reducers: {
    // Reducer comes here
  },



  extraReducers: {
    //For Getting Data
    [ProfileAction.fulfilled]: (state, { payload }) => {
      state.profileData = payload;
      // console.log(state);
    },
    [ProfileAction.pending]: (state) => {
      state.fatching = true;
    },
    [ProfileAction.rejected]: (state, { payload }) => {
      state.errorMessage = payload.message;
    },
    //For Updating Data
    [ProfileUpdateAction.fulfilled]: (state, { payload }) => {
      state.profileData = payload;
      // console.log(state);
    },
    [ProfileUpdateAction.pending]: (state) => {
      state.fatching = true;
    },
    [ProfileUpdateAction.rejected]: (state, { payload }) => {
      state.errorMessage = payload.message;
    },

  },
});

export const ProfileSelector = (state) => state.userProfile.valueState;
