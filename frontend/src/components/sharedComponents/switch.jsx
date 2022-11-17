import React, { useRef } from "react";
import "../../styles/switch.scss";
import { useNavigate } from "react-router-dom";
const SwitchButton = () => {
  const ref = useRef();
  const navigate = useNavigate();

  const handleChecked = () => {
    console.log(typeof ref.current.value);
    if (ref.current.value === "on") {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="can-toggle can-toggle--size-large">
        <input type="checkbox" ref={ref} onClick={handleChecked} />
        <label>
          <div
            className="can-toggle__switch"
            data-checked="Register"
            data-unchecked="login"
          ></div>
        </label>
      </div>
    </>
  );
};

export default SwitchButton;
