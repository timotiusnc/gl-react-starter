import { ENV } from "@common/constants";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import * as glimg from "../../../../public/images/gl.jpg";
import { NestedCtx } from "../context/NestedCtx";
import { multiply } from "../utils/utils";

import "./Landing.scss";

const Landing = () => {
  const asu = () => {
    console.log("process.env.NODE_ENV", process.env.NODE_ENV);
    console.log("ENV.APP_ENV", ENV.APP_ENV);
    console.log("ENV.APP_ENV", ENV.GRAPHQL_URL);

    // Tree-shaking test (multiply should be included because it's used, divide should not)
    // See utils/utils.ts
    console.log(multiply(1, 3));

    // Dynamic import examples
    import(/*webpackChunkName: "Utils" */ "../utils/kambing").then(module => module.kambing());

    if (0 === 2 - 2) {
      import(/*webpackChunkName: "Utils" */ "../utils/macan").then(module => module.macan());
    }
  };

  const nestedContext = React.useContext(NestedCtx);
  setTimeout(() => nestedContext.setLocale("id"), 1000); // Simulate dynamic translation changes

  asu();

  return (
    <div className="landing__container">
      <Link to="/main">Main</Link>
      <div className="test">Landing</div>
      <FormattedMessage id="hello" /> <br />
      <img src={glimg} alt="GL Logo" width="200" />
    </div>
  );
};

export default Landing;
