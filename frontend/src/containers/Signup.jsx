import React, { useEffect, useRef, useState } from "react";

// css
import css from "../styles/registration.module.scss";

// Material Components
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

// Components
import SwipeBtn from "../components/SwipeBtn";
import Input from "../components/sharedComponents/input";

// From  
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../redux/slice/UserSlice";
import SignupUser from "../redux/actions/signupAction";
import { useSelector, useDispatch } from "react-redux";

const Signup = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector(userSelector);
  console.log(data.message.status);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const Password = useRef({});
  Password.current = watch("password", "");

  useEffect(() => {
    if (data.message.status?.success == true) {
      console.log(data.message.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
      reset();
    }

  }, [JSON.stringify(data)]);

  const onSubmit = (Data) => {
    handleOpen();

    alert(JSON.stringify(Data));
    dispatch(SignupUser({ Data })); //send data to redux store
    console.log(Data);
  };


  const style = {
    position: "absolute",
    color: "green",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",

    p: 4,
  };

  return (
    <>
      <SwipeBtn />
      <Grid container className={css.signup}>
        <Grid item className={css.signup_left}>
          <h1>Welcome!</h1>
          <h4>Enter your details and start journey with us</h4>
        </Grid>
        <Grid item className={css.signup_right}>
          <div className={css.signup_top}>
            <h2>Apply as Employee</h2>
          </div>
          <div className={css.signup_bottom}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                marginBottom={3}
                display="flex"
                alignItems="center"
                sx={{
                  flexDirection: {
                    xs: "column", // 0
                    sm: "row", // 600
                  },
                }}
                gap="20px"
              >
                <Input
                  label="first_name"
                  register={register}
                  name="first_name"
                  check={{
                    required: "first_name is required",
                    pattern: /^[A-Za-z]+$/i,
                  }}
                  type="text"
                  placeholder="First Name *"
                  errors={errors}
                />
                <Input
                  label="last_name"
                  register={register}
                  name="last_name"
                  check={{
                    required: "first_name is required",
                    pattern: /^[A-Za-z]+$/i,
                  }}
                  type="text"
                  placeholder="Last Name *"
                  errors={errors}
                />
              </Box>
              <Box marginBottom={3}>
                <Input
                  label="no_of_employees"
                  register={register}
                  name="no_of_employees"
                  check={{
                    required: "no_of_employees is required",
                    valueAsNumber: true,
                  }}
                  type="number"
                  placeholder="No of Employees *"
                  errors={errors}
                />
              </Box>
              <Box
                marginBottom={3}
                display="flex"
                alignItems="center"
                gap="20px"
                sx={{
                  flexDirection: {
                    xs: "column", // 0
                    sm: "row", // 600
                  },
                }}
              >
                <Input
                  label="email"
                  register={register}
                  name="email"
                  check={{
                    required: "email is required",
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  }}
                  type="email"
                  placeholder="Your Email *"
                  errors={errors}
                />
                <Input
                  label="phone_no"
                  register={register}
                  name="phone_no"
                  check={{
                    required: "phone_no is required",
                    minLength: 11,
                  }}
                  type="number"
                  placeholder="Mobile Number *"
                  errors={errors}
                />
              </Box>
              <Box marginBottom={3}>
                <Input
                  label="password"
                  register={register}
                  name="password"
                  check={{ required: "password is required", minLength: 8 }}
                  type="password"
                  placeholder="password *"
                  errors={errors}
                />
              </Box>
              <Box
                marginBottom={3}
                display="flex"
                gap="20px"
                sx={{
                  flexDirection: {
                    xs: "column", // 0
                    sm: "row", // 600
                  },
                }}
              >
                <Input
                  label="ConfirmPassword"
                  register={register}
                  name="ConfirmPassword"
                  check={{
                    required: "ConfirmPassword is required",
                    validate: (value) =>
                      value === Password.current ||
                      "The passwords do not match",
                  }}
                  type="password"
                  placeholder="confirm password *"
                  errors={errors}
                />
                <FormControl variant="filled" fullWidth size="small">
                  <InputLabel>Your Role/Designation</InputLabel>
                  <Select>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                marginTop={3}
                marginBottom={1}
              >
                <Button
                  variant="contained"
                  size="small"
                  type="submit"
                  onClick={handleOpen}
                  sx={{
                    borderRadius: "16px",
                    backgroundColor: "#283686",
                    width: "160px",
                    textTransform: "capitalize",
                    fontSize: "0.9rem",
                  }}
                >
                  Register
                </Button>
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
