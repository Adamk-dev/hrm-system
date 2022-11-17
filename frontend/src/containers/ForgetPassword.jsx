import React from "react";

// css
import css from "../styles/forgetpassword.module.scss";

// Material Styles
import { Grid } from "@mui/material";

// Material Icons
import LockOpenIcon from "@mui/icons-material/LockOpen";

const ForgetPassword = () => {
  return (
    <div className={css.forgetpass}>
      <div className={css.forget_left}>
        <h1>Welcome!</h1>
        <h4>Enter your details and start journey with us</h4>
      </div>
      <div className={css.forget_right}>
        <div className={css.forget_top}>
          <h1>Forget your password?</h1>
        </div>
        <div className={css.forget_bottom}>
          <div className={css.forget_bottom_wrapper}>
            <div className={css.forget_details}>
              <span>
                <LockOpenIcon />
              </span>
              <p>
                Enter your email address and we will send you a link to reset
                your pasword
              </p>
            </div>
            <div className={css.forget_main}>
              <div className={css.forget_input}>
                <span>Email Address</span>
                <input type="text" placeholder="e.g email@domain.com" />
                <button>Reset Password</button>
              </div>

              <div className={css.forget_footer}>
                <span>Don't have an account ?</span>
                <button>Create an Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;