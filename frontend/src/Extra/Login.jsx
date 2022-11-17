import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Input from "../components/sharedComponents/input";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import Styles from "../styles/login.module.scss";
import SwitchButton from "../components/sharedComponents/switch";
import LofinTopImg from "../assets/images/login-img.gif";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginUser from "../redux/actions/login";
import { userSelector } from "../redux/slice/UserSlice";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import PrivateRoutes from "../routes/PriavteRoutes";

import ProfileAction from '../redux/actions/ProfileAction';
import ProfileUpdateAction from '../redux/actions/ProfileUpdateAction';

const Login = () => {
  const navigate = useNavigate();
  const { loginData } = useSelector(userSelector);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  useEffect(() => {

    if (loginData?.status?.success) {
      localStorage.setItem('token', loginData.data.jwtToken)
      console.log(loginData.data)
      // dispatch(ProfileAction(loginData.data))
      // dispatch(ProfileUpdateAction(loginData.data))
      navigate("/");
      reset();

    }

  }, [JSON.stringify(loginData)]);

  const onSubmit = (Data) => {

    // navigate("/");

    dispatch(loginUser({ Data }));
  };

  return (
    <>
      <Grid
        container
        className={Styles.login_container}
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Grid
          className={Styles.main_dev}
          item
          xs={12}
          sm={12}
          md={8}
          lg={7}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ justifyContent: { xs: "center", md: "center" } }}
        >
          <div className={Styles.text}>
            <h1>let's get started now !</h1>
            <h2> Login as Employee</h2>
          </div>
          <div className={Styles.login_form}>
            <div className={Styles.form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>email:</label>
                  <div className={Styles.email}>
                    <span>
                      <MailOutlineIcon />
                    </span>{" "}
                    <Input
                      label="username"
                      name="username"
                      register={register}
                      check={{
                        required: "username is required",
                        pattern:
                          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      }}
                      type="email"
                      placeholder="Your Email *"
                      errors={errors}
                    />
                  </div>
                  {/* <p style={{colors:"red"}}>{errors.Email?.message}</p> */}
                </div>

                <div className={Styles.password_dev}>
                  <label>password: </label>
                  <div className={Styles.password}>
                    <span>
                      <LockIcon />
                    </span>
                    {/* <Input type="password" placeholder="Password *" /> */}
                    <Input
                      label="Password"
                      register={register}
                      check={{ required: "Password is required", minLength: 6 }}
                      type="password"
                      name="Password"
                      placeholder="password *"
                      errors={errors}
                    />
                  </div>
                </div>
                <div className={Styles.form_footer}>
                  <div className={Styles.remember}>
                    <input
                      type="checkbox"
                      label="rememberMe"
                      {...register("rememberMe")}
                    />
                    <span>Remember me</span>
                  </div>
                  <div className={Styles.forgort_pass}>
                    <NavLink to="/forgetpass">forgot passoword? </NavLink>
                  </div>
                </div>
                <div className={Styles.login_btn}>
                  <button type="submit">login</button>
                </div>
                {loginData?.status?.success ? (
                  <Alert severity="success">
                    This is a success alert — check it out!
                  </Alert>
                ) : loginData?.status?.success === false ? (
                  <Alert severity="error">
                    Invalid ID or PASSWORD Please try again{" "}
                  </Alert>
                ) : (
                  <></>
                )}
              </form>
            </div>

            <div className={Styles.login_circle}>
              <div className={Styles.login_circle_icon}>
                <img src={LofinTopImg} alt="login_profile" />
              </div>
            </div>
          </div>
        </Grid>

        <Grid
          item
          sm={12}
          md={4}
          lg={3}
          display="flex"
          justifyContent="start"
          style={{ marginTop: "50px" }}
        >
          <div>
            <SwitchButton />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
