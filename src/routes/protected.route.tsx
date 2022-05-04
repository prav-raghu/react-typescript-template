import React, { FunctionComponent } from "react";
import { Redirect, Route, RouteProps, useHistory } from "react-router-dom";
export const PrivateRoute: FunctionComponent<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const history = useHistory();
  // You can check special cases you need from the token. And then act correspondingly
  // E.g. If user is admin and the "user" part of the app is prevented for admin.
  // Here the data should be read from your token/cookies.
  // Prior to this you should have code to check whether the token is valid or invalid.
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    history.push("/admin-panel");
  }
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) => {
        // logic for authenticated user to access /app part goes here.
        // e.g. check if user is logged-in logic.
        const isLoggedIn = false;
        return isLoggedIn ? (<Component {...props} />) : (<Redirect to={"/login"} />);
      }}
    />
  );
};
