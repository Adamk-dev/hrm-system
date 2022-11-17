import React, { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Styles from "../styles/registiration.module.scss";
import Input from "../components/sharedComponents/input";
import SelectInput from "../components/selectInput";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
    // else if (data.message.status?.success == false) {
    //   console.log(data);
    // }
  }, [JSON.stringify(data)]);

  const onSubmit = (Data) => {
    handleOpen();

    alert(JSON.stringify(Data));
    dispatch(SignupUser({ Data })); //send data to redux store
    console.log(Data)
  };

  // const changeHandler = () => {
  // }
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
      <div className={Styles.container}>
        <Grid container className={Styles.Singup_container}>
          <Grid
            item
            xs={10}
            sm={7}
            md={4}
            display="flex"
            justifyContent="center"
            aligndivs="center"
          >
            <div className={Styles.text_box}>
              <h1>welcome!</h1>
              <p>
                Enter your details and start <br /> journey with us
              </p>
            </div>
          </Grid>
          <Grid item xs={11} sm={9} md={7} className={Styles.register_form}>
            <h2>Apply as Employee</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
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
                  <SelectInput
                    label="role"
                    {...register("role", { required: "role_name is required" })}
                    errors={errors}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
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
                  <Input
                    label="password"
                    register={register}
                    name="password"
                    check={{ required: "password is required", minLength: 8 }}
                    type="password"
                    placeholder="password *"
                    errors={errors}
                  />
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

                  <div className={Styles.register_button}>
                    <button type="submit" onClick={handleOpen}>
                      register
                    </button>
                    {data.message.status?.success == true ? (
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h4"
                            component="h1"
                          >
                            Signed up Successfully
                          </Typography>
                        </Box>
                      </Modal>
                    ) : (
                      <></>
                    )}
                  </div>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Signup;
