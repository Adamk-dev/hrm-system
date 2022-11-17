import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import api from "../../config/api_url";
const SignupUser = createAsyncThunk(
  "users/signupUser",
  async ({ Data }, thunkAPI) => {
    const {
      role,
      no_of_employees,
      email,
      password,
      phone_no,
      first_name,
      last_name,
    } = Data;
    console.log(Data, "signupData");
    try {
      const response = await Axios.post(`${api}companys/register`, {
        role,
        no_of_employees,
        email,
        password,
        phone_no,
        first_name,
        last_name,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        return { ...response.data, Data };
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export default SignupUser;
