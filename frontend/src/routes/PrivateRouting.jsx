import React from "react";

import { Routes, Route } from "react-router-dom";

// Component
import NewSidebar from "../components/NewSidebar";

const PrivateRouting = ({ Component, path }) => {
  return (
    <Routes>
      <Route
        path = {path}
        element={
          <NewSidebar>
            <Component />
          </NewSidebar>
        }
      />
    </Routes>
  );
};

export default PrivateRouting;
