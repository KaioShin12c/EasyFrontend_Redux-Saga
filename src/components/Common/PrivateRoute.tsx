import * as React from "react";
import { Navigate, RouteProps } from "react-router-dom";

export function PrivateRoute(props: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  return (
    <React.Fragment>
      {isLoggedIn ? props.children : <Navigate to="/login" />}
    </React.Fragment>
  );
}
