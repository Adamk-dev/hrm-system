import { Identity } from "@mui/base";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const user_id = localStorage.getItem("Id");
const api = "http://localhost:8080/employees/update";
debugger;
export const ProfileUpdateAction = createAsyncThunk(
  "profile/profileUpdateAction",
  async ({ Data }, thunkAPI) => {
    debugger;
    console.log(Data, "update Thunk");
    const {
      dob,
      job_title,
      departments,
      address,
      city,
      phone_number,
      alt_phone_number,
      cnic,
      marital_status,
      first_name,
      last_name,
      skills,
      id,
    } = Data;

    // console.log(Data);
    debugger;
    try {
      const response = await Axios.request({
        method: "PUT",
        url: "http://localhost:8080/employees/update",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },

        data: {
          dob,
          job_title,
          departments,
          address,
          city,
          phone_number,
          alt_phone_number,
          cnic,
          marital_status,
          first_name,
          last_name,
          skills,
          id,
        },
      });

      console.log(response, "riaz");
      if (response.status === 200) {
        console.log("successfull");
        return { ...response.data };
      } else {
        console.log("failed");
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log("Error", e.response);
      return thunkAPI.rejectWithValue(e.response.data);
      // }
    }
  }
);

export default ProfileUpdateAction;
