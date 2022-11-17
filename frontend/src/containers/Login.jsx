import React, { useEffect } from "react";

// css
import css from "../styles/login.module.scss";

// Images
import LoginLogo from "../assets/images/login-img.gif";

// React Links
import { Link } from "react-router-dom";

// Material Components
import { Checkbox, FormControlLabel } from "@mui/material";
import Alert from "@mui/material/Alert";


// Material Icons
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Components
import SwipeBtn from "../components/SwipeBtn";
import Input from "../components/sharedComponents/input";

// Form
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../redux/slice/UserSlice";
import loginUser from "../redux/actions/login";
import ProfileAction from "../redux/actions/ProfileAction";
import ProfileUpdateAction from "../redux/actions/ProfileUpdateAction";
import PrivateRoutes from "../routes/PriavteRoutes";

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
      localStorage.setItem("token", loginData.data.jwtToken);
      console.log(loginData.data);
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
      <div className={css.login}>
        <SwipeBtn />
        <div className={css.login_top}>
          <h1>let's get started now !</h1>
          <h2> Login as Employee</h2>
        </div>
        <div className={css.login_bottom}>
          <div className={css.login_main}>
            <div className={css.login_logo}>
              <img src={LoginLogo} alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={css.login_items}>
                <span>Email:</span>
                <div className={css.login_input}>
                  <div className={css.loginicon}>
                    <MailOutlineIcon />
                  </div>
                  <Input
                    label="username"
                    name="username"
                    register={register}
                    check={{
                      required: "username is required",
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    }}
                    type="email"
                    placeholder="Your Email *"
                    errors={errors}
                  />
                </div>
              </div>

              <div className={css.login_items}>
                <span>Password:</span>
                <div className={css.login_input}>
                  <div className={css.loginicon}>
                    <LockOpenIcon />
                  </div>
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

              <div className={css.login_btn}>
                <button>Login</button>
              </div>

              <div className={css.login_footer}>
                <FormControlLabel
                  className={css.login_footerIcon}
                  control={
                    <Checkbox
                      icon={<FavoriteBorderIcon />}
                      checkedIcon={<FavoriteIcon />}
                    />
                  }
                  label="Remember me"
                  {...register("rememberMe")}
                />
                <Link href="#" underline="none" variant="subtitle2">
                  {"forget Password?"}
                </Link>
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
        </div>
      </div>
    </>
  );
};

export default Login;
