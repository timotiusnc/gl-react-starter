import { ENV } from "@common/constants";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import { NestedCtx } from "../context/NestedCtx";
import { multiply } from "../utils/utils";

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
    <>
      <Link to="/main">Main</Link>
      <div>Landing</div>
      <FormattedMessage id="hello" />
    </>
  );
};

export default Landing;
