import { Button, Grid } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import Styles from "../styles/profile.module.scss";
import profileimage from "../assets/images/Profile_logo.png";
import Input from "../components/sharedComponents/input";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SelectInput from "../components/ProfileSelectInput";
import city from "../json file/city.json";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch, useSelector } from "react-redux";
import { ProfileSelector } from "../redux/slice/ProfileSlice";
import ProfileAction from "../redux/actions/ProfileAction";
import { userSelector } from "../redux/slice/UserSlice";
import ProfileUpdateAction from "../redux/actions/ProfileUpdateAction";

import { useForm } from "react-hook-form";

const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector(ProfileSelector);
  const user = useSelector(userSelector);
  const [profileData, setProfileData] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    // reset,
    // watch,
  } = useForm();

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setCalendar(format(new Date(), "MM/dd/yyyy"));
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
    if (state?.profileData && state?.profileData?.data) {
      setProfileData(state?.profileData?.data);
      setValue("first_name", state?.profileData?.data?.user?.first_name);
      setValue("last_name", state?.profileData?.data?.user?.last_name);
      setValue("email", state?.profileData?.data?.user?.email);
      setValue("phone_number", state?.profileData?.data?.phone_number);
      setValue("cnic", state?.profileData?.data?.cnic);
      setValue("address", state?.profileData?.data?.address);
      setValue("city", state?.profileData?.data?.city);
      setValue("dob", state?.profileData?.data?.dob);
      setValue("marital_status", state?.profileData?.data?.marital_status);
      setValue("alt_phone_number", state?.profileData?.data?.alt_phone_number);
      setValue("id", user?.loginData?.data?.user?.id);
    }
    if (user.loginData.data && user.loginData.data.user.id) {
      dispatch(ProfileAction(user.loginData.data.user.id));

      localStorage.setItem("Id", JSON.stringify(user.loginData.data.user.id));
    }
    if (state?.profileData?.data) {
      localStorage.setItem(
        "profileData",
        JSON.stringify(state.profileData.data)
      );
    }
  }, [JSON.stringify(state)]);

  const citydata = city.map((item) => {
    return item.name;
  });
  const marital = ["Single", "Married"];

  const skill = ["Riaz"];

  const [calendar, setCalendar] = useState("");

  const refOne = useRef(null);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleSelect = (date) => {
    setCalendar(format(date, "MM/dd/yyyy"));
  };

  const handleAddskill = () => {
    skill.push(prompt("Add Skill"));
    console.info("You clicked the delete icon.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const onSubmitForm = (Data) => {
    setOpen(false);

    // Data.preventDefault();
    dispatch(ProfileUpdateAction({ Data })); //send data to redux store

    console.log("Data", Data);
  };

  return (
    // MAIN DIV CONTAINER
    <div className={Styles.container}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        {/* // MAIN GRID CONTAINER */}
        <Grid container className={Styles.gridcon}>
          {/* MAIN GRID ITEM */}
          <Grid item className={Styles.griditem} md={11} sm={11} xs={11}>
            {/* PROFILE IMAGE CONTAINER */}
            <Grid className={Styles.profilecon} conatainer>
              <Grid className={Styles.profileitem} item>
                <img src={profileimage} className={Styles.profileimg} alt="" />

                <AddCircleIcon className={Styles.addphoto} />
              </Grid>
            </Grid>

            {/* FISRT NAME , LAST NAME CONATINER */}

            <Grid container className={Styles.namecon} spacing={1}>
              <Grid item className={Styles.nameitem} sm={5} xs={11}>
                <label htmlFor=""> First Name</label>
                <Input
                  type="text"
                  placeholder="First Name *"
                  label="first_name"
                  name="first_name"
                  register={register}
                  errors={errors}
                />
              </Grid>

              <Grid item className={Styles.nameitem} sm={5} xs={11}>
                <label htmlFor=""> Last Name</label>
                <Input
                  type="text"
                  placeholder="Last Name *"
                  label="last_name"
                  name="last_name"
                  register={register}
                  errors={errors}
                />
                {/* check={{ required: false, maxLength: 30 }}  */}
              </Grid>
            </Grid>

            {/* // SKILLS CONTAINER  */}

            <Grid container className={Styles.skillcon} spacing={1}>
              <Grid item className={Styles.skillitem} sm={10} xs={11}>
                <label htmlFor=""> SKILLs</label>

                <Stack direction="row" spacing={1} className={Styles.stack}>
                  {/* <Chip label="user experience" onDelete={handleDelete} className={Styles.chips} color='primary'   />
      <Chip label="Design" onDelete={handleDelete} className={Styles.chips} color='primary'   />
      <Chip label="marketing" onDelete={handleDelete} className={Styles.chips} color='primary'   />
      <Chip label="USER INTERFACE" onDelete={handleDelete} className={Styles.chips} color='primary'   /> */}

                  {skill.map((item) => (
                    <Chip
                      label={item}
                      onClick={handleAddskill}
                      onDelete={handleDelete}
                      className={Styles.chips}
                      color="primary"
                    />
                  ))}

                  <AddCircleIcon className={Styles.addskills} />
                </Stack>
              </Grid>
            </Grid>

            {/* // EMAIL PHONE CONTAINER  */}

            <Grid container className={Styles.emailcon} spacing={1}>
              <Grid item className={Styles.emailitem} sm={5} xs={11}>
                <label htmlFor="">Email</label>
                <Input
                  type="email"
                  placeholder="abc@mail.com"
                  disabled
                  name="email"
                  label="email"
                  register={register}
                />
              </Grid>

              <Grid item className={Styles.phoneitem} sm={5} xs={11}>
                <label htmlFor="">Phone</label>
                <Input
                  type="number"
                  placeholder="03000000000000"
                  name="phone_number"
                  label="phone_number"
                  register={register}
                />
              </Grid>
            </Grid>

            {/* nic CONTAINER  */}

            <Grid container className={Styles.niccon} spacing={1}>
              <Grid item className={Styles.nicitem} sm={10} xs={11}>
                <label htmlFor="">Nic Number</label>
                <Input
                  type="number"
                  placeholder="42201-1234567-0"
                  name="cnic"
                  label="cnic"
                  register={register}
                />
              </Grid>
            </Grid>

            {/* Address Line CONTAINER  */}

            <Grid container className={Styles.addresscon} spacing={1}>
              <Grid item className={Styles.addressitem} sm={10} xs={11}>
                <label htmlFor="">Address Line</label>
                <Input
                  type="text"
                  placeholder="1234 Street"
                  name="address"
                  label="address"
                  register={register}
                />
              </Grid>
            </Grid>

            {/* COUNTRY birth CONTAINER  */}

            <Grid container className={Styles.countrycon} spacing={1}>
              <Grid item className={Styles.countryitem} sm={5} xs={11}>
                <label className={Styles.label}>City</label>
                <div>
                  <SelectInput
                    option={citydata}
                    className={Styles.cityinput}
                    name="city"
                    label="city"
                    register={register}
                  />
                  {/* <SelectInput stateopt={state} option={cities} /> */}
                </div>
              </Grid>

              <Grid item className={Styles.birthitem} sm={5} xs={11}>
                <label htmlFor="">Birthdate</label>

                <Input
                  // value={calendar}
                  readonly
                  className={Styles.input}
                  onClick={() => setOpen((open) => !open)}
                  name="dob"
                  value={profileData?.dob ? profileData?.dob : calendar}
                  label="dob"
                  register={register}
                />
                <div ref={refOne} className={Styles.calendarDiv}>
                  {open && (
                    <Calendar
                      date={new Date()}
                      className={Styles.calendar}
                      onChange={handleSelect}
                      direction="vertical"
                      scroll={false}
                      fixedHeight={true}
                    />
                  )}
                </div>
              </Grid>
            </Grid>

            {/*  MATERIAL Alternative Number CONTAINER  */}

            <Grid container className={Styles.marital_altnum} spacing={1}>
              <Grid item className={Styles.maritalitem} sm={5} xs={11}>
                <label htmlFor="">Marital Status</label>
                <div className={Styles.marital}>
                  <SelectInput
                    option={marital}
                    className={Styles.maritalinput}
                    name="marital_status"
                    label="marital_status"
                    register={register}
                  />
                </div>
              </Grid>

              <Grid item className={Styles.altNumitem} sm={5} xs={11}>
                <label htmlFor="">Alternative Phone Number</label>
                <Input
                  type="number"
                  placeholder="0310000000"
                  name="alt_phone_number"
                  label="alt_phone_number"
                  register={register}
                />
                {/* <Input Styles={{ display: 'none' }} name="id" label="id" register={register} /> */}
              </Grid>
            </Grid>

            {/* // BUTTON CONTAINER  */}
            <Grid container className={Styles.btncon} spacing={1}>
              <Grid item className={Styles.btnitem} sm={5} xs={11}>
                <Button type="submit" className={Styles.savebtn}>
                  Save Profile
                </Button>
                <Button type="submit" className={Styles.cancelbtn}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Profile;
