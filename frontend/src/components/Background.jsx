import React from "react";

// Css
import css from "../styles/background.module.scss";

function Background({ children }) {
  return (
    <>
      <div className={css.Background}>
        <div className={css.backgroundWrapper}>{children}</div>
      </div>
    </>
  );
}

export default Background;
