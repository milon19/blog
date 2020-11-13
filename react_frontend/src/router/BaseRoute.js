import React, { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "../app/common/NavBar/NavBar";
import Footer from "../app/common/Footer/Footer";
import Register from "../app/components/RegistrationComponent/RegistrationComponent";
import Login from "../app/components/LoginComponent/LoginComponent";
import Logout from "../app/components/LogoutComponent/LogoutComponent";
import NotFound from "../app/common/NotFound";

import Post from "../app/components/PostComponent/PostComponent";
import PostDetails from "../app/components/PostComponent/pages/PostDetails";

const BaseRoute = () => {
  return (
    <Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/react/register" component={Register}></Route>
          <Route path="/react/login" component={Login}></Route>
          <Route path="/react/logout" component={Logout}></Route>

          <Route path="/react/posts/:id" exact component={PostDetails}></Route>
          <Route path="/react/posts" exact component={Post}></Route>

          <Route path="/react/not-found" exact component={NotFound}></Route>
          <Redirect from="/" exact to="/react/posts" />
          <Redirect from="/react" exact to="/react/posts" />
          <Redirect to="/react/not-found" />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
};

export default BaseRoute;
