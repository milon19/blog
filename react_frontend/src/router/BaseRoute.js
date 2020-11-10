import React, { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "../app/common/NavBar/NavBar";
import Register from "../app/components/RegistrationComponent/RegistrationComponent";
import Login from "../app/components/LoginComponent/LoginComponent";
import NotFound from "../app/common/NotFound";

import Post from "../app/components/PostComponent/PostComponent";

const BaseRoute = () => {
  return (
    <Fragment>
      <NavBar />
      <div>
        <Switch>
          <Route path="/" exact component={Post}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/not-found" exact component={NotFound}></Route>
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Fragment>
  );
};

export default BaseRoute;
