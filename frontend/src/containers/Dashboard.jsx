import { Grid } from '@mui/material'
// import Input from '../components/sharedComponents/input'
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LockIcon from '@mui/icons-material/Lock';

// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';



import React from "react";
import axios from "axios";

// Css
import css from "../styles/dashboard.module.scss";

// Material Icons
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

// React Charts
import { Doughnut, Line } from "react-chartjs-2";
import { Charts as ChartJS } from "chart.js/auto";


// Api Ayi

const EmployessData = [
  {
    icon: <GradingOutlinedIcon />,
    num: "120",
    title: "Projects",
  },
  {
    icon: <TrackChangesOutlinedIcon />,
    num: "42",
    title: "Clints",
  },

  {
    icon: <FormatListBulletedOutlinedIcon />,
    num: "36",
    title: "Tasks",
  },

  {
    icon: <Diversity3OutlinedIcon />,
    num: "423",
    title: "Employess",
  },
];
const EmployessAvailability = [
  {
    icon: <GradingOutlinedIcon />,
    title: "Attendence",
    num: "400",
  },
  {
    icon: <TrackChangesOutlinedIcon />,
    title: "Late Coming",
    num: "17",
  },

  {
    icon: <FormatListBulletedOutlinedIcon />,
    title: "Absent",
    num: "06",
  },

  {
    icon: <Diversity3OutlinedIcon />,
    title: "Leave Apply",
    num: "14",
  },
];
const progessbar = [
  {
    title: "Today Leave",
    info: "4/65",
    bg: "darkorange",
    width: "40%",
  },
  {
    title: "Pending Invoice",
    info: "15/92",
    bg: "yellow",
    width: "45%",
  },
  {
    title: "Complete Projects",
    info: "85/112",
    bg: "green",
    width: "80%",
  },
  {
    title: "Open Tickets",
    info: "190/212",
    bg: "red",
    width: "70%",
  },
  {
    title: "Close Tickets",
    info: "22/212",
    bg: "#00a1fb",
    width: "20%",
  },
];
const RadioBtn = [
  {
    title: "Pending Invoice",
    persentage: "30%",
    num: "166",
    bg: "purple",
  },
  {
    title: "Pending Invoice",
    persentage: "22%",
    num: "115",
    bg: "yellow",
  },
  {
    title: "Pending Invoice",
    persentage: "24%",
    num: "31",
    bg: "green",
  },
  {
    title: "Pending Invoice",
    persentage: "21%",
    num: "47",
    bg: "red",
  },
  {
    title: "Pending Invoice",
    persentage: "10%",
    num: "5",
    bg: "#00a1fb",
  },
];
const LineChatData = [
  {
    id: 1,
    month: "0 Jan",
    employess: 10,
  },
  {
    id: 2,
    month: "31 Jan",
    employess: 30,
  },
  {
    id: 3,
    month: "22 Feb",
    employess: 5,
  },
  {
    id: 4,
    month: "15 Mar",
    employess: 45,
  },
  {
    id: 5,
    month: "05 Apr",
    employess: 20,
  },
  {
    id: 6,
    month: "26 Apr",
    employess: 90,
  },
  {
    id: 7,
    month: "17 May",
    employess: 10,
  },
  {
    id: 8,
    month: "8 Jun",
    employess: 70,
  },
  {
    id: 9,
    month: "29 Jun",
    employess: 40,
  },
  {
    id: 10,
    month: "20 Jul",
    employess: 60,
  },
];
const pieChart = {
  labels: ["Female", "Male"],
  datasets: [
    {
      label: "My First Dataset",
      data: [100, 150],
      backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
      hoverOffset: 4,
    },
  ],
};
const Dashboard = () => {
  // Line Chart Start
  const LineChart = {
    labels: LineChatData.map((data) => data.month),
    datasets: [
      {
        label: "Employees Info",
        data: LineChatData.map((data) => data.employess),
        borderColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderWidth: 3,
      },
    ],
  };
  // Line Chart End

  return (
    <div className={css.dashboard}>
      <div className={css.dashboard_wrapper}>
        {/* DashBoard Top Start */}
        <div className={css.employes}>
          <div className={css.employes_left}>
            <div className={css.line_chart}>
              <Line data={LineChart} />
            </div>
          </div>
          <div className={css.employes_right}>
            <div className={css.employes_right_logo}>
              <TaskOutlinedIcon />
            </div>
            <h3>360</h3>
            <h5>Applications</h5>
          </div>
        </div>
        <div className={css.employes_boxs}>
          {EmployessData.map((items, index) => {
            return (
              <>
                <div className={css.employes_box} key={index}>
                  <div className={css.employes_box_left}>{items.icon}</div>
                  <div className={css.employes_box_right}>
                    <h4>{items.num}</h4>
                    <h5>{items.title}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* DashBoard Top End */}

        {/* DashBoard Bottom Start */}
        <div className={css.employes_detail}>
          <div className={css.employes_detailLeft}>
            <div className={css.employes_detailLeft_Wrapper}>
              <div className={css.detailLeft_heading}>
                <h3>Employees Avaigitlabity</h3>
              </div>
              <div className={css.detailLeft_boxs}>
                {EmployessAvailability.map((items, index) => {
                  return (
                    <>
                      <div className={css.detailLeft_box} key={index}>
                        <div className={css.detailLeft_logo}>{items.icon}</div>
                        <div className={css.detailLeft_Dec}>
                          <h5>{items.title}</h5>
                          <h3>{items.num}</h3>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={css.employes_detailRight}>
            <div className={css.PieChar}>
              {/* Donut Chart  */}
              <Doughnut data={pieChart} />
            </div>
          </div>
        </div>
        {/* DashBoard Bottom End */}

        {/* DashBoard Footer Start */}

        <div className={css.statistics}>
          <div className={css.statistics_left}>
            <div className={css.statistics_Wrapper}>
              <div className={css.statistics_heading}>
                <h3>Statistics</h3>
              </div>
              <div className={css.statistics_progressbars}>
                {progessbar.map((items, i) => {
                  return (
                    <>
                      <div className={css.statistics_progressbar}>
                        <div className={css.statistics_progressbar_details}>
                          <span>{items.title}</span>
                          <span>{items.info}</span>
                        </div>
                        <div className={css.progessbar}>
                          <div className={css.bars}>
                            <div
                              className={css.bar}
                              style={{
                                backgroundColor: items.bg,
                                width: items.width,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={css.statistics_right}>
            <div className={css.statistics_Wrapper}>
              <div className={css.statistics_heading}>
                <h3>Task Statistics</h3>
              </div>
              <div className={css.taskBar}>
                <div className={css.taskbar_top}>
                  <div className={css.taskbar_top_left}>
                    <span>Total Tasks</span>
                    <span>385</span>
                  </div>
                  <div className={css.taskbar_top_right}>
                    <span>Overdue Tasks</span>
                    <span>19</span>
                  </div>
                </div>
                <div className={css.taskbar_center}>
                  {RadioBtn.map((items, i) => {
                    return (
                      <>
                        <div
                          key={i}
                          style={{
                            width: items.persentage,
                            backgroundColor: items.bg,
                          }}
                        >
                          <span style={{fontSize:"0.9rem" }}>{items.persentage}</span>
                        </div>
                      </>
                    );
                  })}
                </div>
                {RadioBtn.map((items, i) => {
                  return (
                    <>
                      <div className={css.taskbar_bottom} key={i}>
                        <div className={css.radio}>
                          <div
                            className={css.radio_btn}
                            style={{ border: `2px solid ${items.bg}` }}
                          >
                            <div
                              className={css.btn}
                              style={{ backgroundColor: items.bg }}
                            ></div>
                          </div>
                          <span>{items.title}</span>
                        </div>
                        <span>{items.num}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* DashBoard Footer End */}
      </div>
    </div >
  );
};

export default Dashboard;
