import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isLoggedIn = window.localStorage.getItem("loggedIn") ?? "false";
  return isLoggedIn === "true" ? <Outlet/> : <Navigate to="login"/>;
}

export default ProtectedRoute;
