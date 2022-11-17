import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";

// Routes Parent
import PrivateRouting from "./PrivateRouting";
import PublicRouting from "./PublicRouting";

// Public Routes Pages
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import ForgetPassword from "../containers/ForgetPassword";

// import PublicRoute from "./PublicRoute";
// import PrivateRoutes from "./PriavteRoutes";
// import AdminRoutes from "./AdminRoutes";

// Private Routes Pages
import Dashboard from "../containers/Dashboard";
import HrDashboard from "../containers/HrDashboard";
import ProjectDb from "../containers/ProjectsDb";
import ActiveProject from "../containers/ActiveProjects";
import CompletedProject from "../containers/CompletedProjects";
import Tickets from "../containers/Tickets";
import Profile from "../components/Profile";
import Sorry from "../containers/Sorry";
import Reports from "../containers/Reports";
import Sales from "../containers/Sales";
import Accounts from "../containers/Accounts";
import Payroll from "../containers/Payroll";
import Employess from "../containers/Employess";
import Policies from "../containers/Policies";

const Routing = () => {
  const routing = {
    publicRouting: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/forgetpass",
        Component: ForgetPassword,
      },
      {
        path: "/sorry",
        Component: Sorry,
      },
      // {
      //   path: "*",
      //   Component: notFound,
      // },
    ],
    privateRouting: [
      {
        path: "/",
        Component: Dashboard,
      },
      {
        path: "/dashboard/hr",
        Component: HrDashboard,
      },
      {
        path: "/dashboard/projects",
        Component: ProjectDb,
      },
      {
        path: "/projects/active",
        Component: ActiveProject,
      },
      {
        path: "/projects/completed",
        Component: CompletedProject,
      },
      {
        path: "/ticket",
        Component: Tickets,
      },
      {
        path: "/employess",
        Component: Employess,
      },
      {
        path: "/sale",
        Component: Sales,
      },
      {
        path: "/account",
        Component: Accounts,
      },
      
      {
        path: "/payroll",
        Component: Payroll,
      },
      {
        path: "/policies",
        Component: Policies,
      },
      {
        path: "/reports",
        Component: Reports,
      },

      {
        path: "/profile",
        Component: Profile,
      },
    ],
  };
  return (
    <>
      <BrowserRouter>
        {routing.publicRouting.map(({ path, Component }) => {
          return <PublicRouting path={path} Component={Component} />;
        })}
        {routing.privateRouting.map(({ path, Component }) => {
          return <PrivateRouting path={path} Component={Component} />;
        })}
      </BrowserRouter>
    </>
  );
};

export default Routing;
