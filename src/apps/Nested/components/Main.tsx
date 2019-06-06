import * as React from "react";
import { Link, Route } from "react-router-dom";

import { One } from "./One";
import { Two } from "./Two";

const Main = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/main/one">One</Link>
      <Link to="/main/two">Two</Link>
      <div>Main</div>
      <Route path="/main/one" component={One} />
      <Route path="/main/two" component={Two} />
    </>
  );
};

export default Main;
