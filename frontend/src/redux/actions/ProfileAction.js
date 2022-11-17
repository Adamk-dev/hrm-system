import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import api from "../../config/api_url";

export const ProfileAction = createAsyncThunk(
  "profile/profileAction",
  // async ({ Data }, thunkAPI) => {

  async (thunkAPI) => {
    // console.log(thunkAPI, "thunkAPI");

    try {
      const response = await Axios(`${api}employees?id=` + thunkAPI, {
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      // console.log("showData", Data)

      if (response.status === 200) {
        // return { ...response.data, Data };
        return { ...response.data };
      } else {
        return thunkAPI.rejectWithValue(response.data);
        // return response.data;
      }
    } catch (e) {
      console.log("Error", e.response.data);
      // return e.response.data
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export default ProfileAction;
