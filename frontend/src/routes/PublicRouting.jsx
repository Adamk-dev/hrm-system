import React from "react";

import { Routes, Route } from "react-router-dom";

// Component
import Background from "../components/Background";

const PublicRouting = ({ Component, path }) => {
  return (
    <Routes>
      <Route
        path = {path}
        element={
          <Background> <Component /></Background>
        }
      />
    </Routes>
  );
};

export default PublicRouting;
