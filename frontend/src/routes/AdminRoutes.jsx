import { Outlet, Navigate } from 'react-router-dom';
import Sorry from '../containers/Sorry';
// import jwt_decode from "jwt-decode";

const AdminRoutes = () => {

  const token = localStorage.getItem("token");
  var decoded = "";
  if (token) {
    // decoded = jwt_decode(token);
  }
  return token && decoded?.roles?.filter(i => i.role_name == "admin") > 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/sorry" />
  );
}

export default AdminRoutes;