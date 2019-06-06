import * as React from "react";
import { Route, Router } from "react-router";
import { Link } from "react-router-dom";

import history from "../helpers/browserHistory";

const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Nav />
      <div>Landing - Home</div>
    </>
  );
};

const Test = () => {
  return (
    <>
      <Nav />
      <div>Landing - Test</div>
    </>
  );
};

export const Landing = () => {
  return (
    <Router history={history}>
      <Route exact={true} path="/" component={Home} />
      <Route path="/test" component={Test} />
    </Router>
  );
};
