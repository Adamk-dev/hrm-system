import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import api from "../../config/api_url";
const loginUser = createAsyncThunk(
  "users/login",
  async ({ Data }, thunkAPI) => {
    const { username, Password, rememberMe } = Data;

    try {
      const response = await Axios.post(`${api}user/session/login`, {
        rememberMe,
        username,
        password: Password,
      });
      return response.data;
      // if (response.status === 200) {
      //   localStorage.setItem("token", response.data.token);
      // } else {
      //   return thunkAPI.rejectWithValue(response.data);
      // }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export default loginUser;
