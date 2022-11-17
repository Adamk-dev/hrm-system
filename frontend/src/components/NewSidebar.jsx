import React from "react";
import { useState, useEffect } from "react";

// Csss
import css from "../styles/sidebar.module.scss";

// React Links
import { NavLink } from "react-router-dom";

// Images
import TaskLogo from "../assets/images/tasklogo.png";

// Icons
import FolderIcon from "@mui/icons-material/Folder";
import SpeedIcon from "@mui/icons-material/Speed";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import PaidIcon from "@mui/icons-material/Paid";
import PolicyIcon from "@mui/icons-material/Policy";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import Navbar from "./navbar";
import Dashboard from "../containers/Dashboard";

const Routes = [
  {
    link: "/",
    label: "Dashboard",
    Icon: <SpeedIcon />,
  },
  {
    link: "/dashboard/projects",
    label: "Projects",
    Icon: <FolderIcon />,
  },
  {
    link: "/ticket",
    label: "Tickets",
    Icon: <AirplaneTicketOutlinedIcon />,
  },
  {
    link: "/dashboard/hr",
    label: "OurClints",
    Icon: <MonetizationOnIcon />,
  },
  {
    link: "/employess",
    label: "Employess",
    Icon: <Groups2OutlinedIcon />,
  },
  {
    link: "/sale",
    label: "Sales",
    Icon: <AssessmentOutlinedIcon />,
  },
  {
    link: "/account",
    label: "Accounts",
    Icon: <SwitchAccountIcon />,
  },
  {
    link: "/payroll",
    label: "Payroll",
    Icon: <PaidIcon />,
  },
  {
    link: "/policies",
    label: "Policies",
    Icon: <PolicyIcon />,
  },
  {
    link: "/reports",
    label: "Reports",
    Icon: <ReportOutlinedIcon />,
  },
];

const NewSidebar = ({ children }) => {
  const [toggle, settoggle] = useState(false);

  const [isLogin, setIsLogin] = useState(true);
  // useEffect(()=>{
  const token = localStorage.getItem("token");
  console.log("token ", token);
  // setIsLogin(token?true:false)
  // },[])

  return (
    <>
      <div className={css.main_container}>
        <div className={`${css.sidebar} + ${toggle ? css.sidebarActive : ""}`}>
          <div className={css.sidebar_wrapper}>
            <div className={css.sidebartop}>
              <div className={css.sidebarLogo}>
                <img src={TaskLogo} alt="" />
              </div>
              <span>My-Task</span>
            </div>
            <div className={css.sidebarbottom}>
              {Routes.map((items, index) => {
                return (
                  <>
                    <ul className={css.sidebarmenu} key={index}>
                      <NavLink
                        to={items.link}
                        className={({ isActive }) =>
                          isActive ? css.navbarActive : ""
                        }
                      >
                        <li>
                          <span className={css.sidebarIcon}>{items.Icon}</span>
                          <span className={css.sidebarText}>{items.label}</span>
                        </li>
                        <ArrowDropDownIcon className={css.dropdownIcon} />
                      </NavLink>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`${css.main} + ${toggle ? css.mainActive : ""}`}>
          <Navbar toggle={toggle} settoggle={settoggle} />
          {/* <div className={`${css.alpha} `}>Hello</div> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default NewSidebar;
