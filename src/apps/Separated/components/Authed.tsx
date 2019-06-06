import * as React from "react";
import { Route, Router } from "react-router";
import { Link } from "react-router-dom";

import history from "../helpers/browserHistory";

const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/auth">Auth</Link>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Nav />
      <div>Authed - Home</div>
    </>
  );
};

const Auth = () => {
  return (
    <>
      <Nav />
      <div>Authed - Auth</div>
    </>
  );
};

export const Authed = () => {
  return (
    <Router history={history}>
      <Route exact={true} path="/" component={Home} />
      <Route path="/auth" component={Auth} />
    </Router>
  );
};
