import React from "react";
import { Redirect, Route } from "react-router-dom";

//1. It has the same API as<Route>
//2. if an auth token exist, it renders a <Route> and passes all props through
//3. otherwise, ewdirect to login page

//this component id <Friends/>
//take the component props, rename it component
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        //if the token in localstore, render the component
        if (localStorage.getItem("token")) {
          console.log("token found, rendering component");
          return <Component {...props} />;
        }
        //otherwise, redirect to login
        else {
          console.log("no token");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
