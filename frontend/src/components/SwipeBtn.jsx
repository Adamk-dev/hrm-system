import React from "react";
import { NavLink } from "react-router-dom";

// Css
import css from "../styles/SwipeBtn.module.scss";

const SwipeBtn = () => {
  return (
    <div className={css.swiperbtn}>
      <ul>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? css.activeClassName : undefined
            }
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? css.activeClassName : undefined
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SwipeBtn;
