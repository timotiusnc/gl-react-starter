import { ENV } from "@common/constants";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { RouteComponentProps } from "react-router";

import { RootCtx } from "../context/RootCtx";
import { multiply } from "../utils/utils";

import { Nav } from "./Nav";

export const Main = (props: RouteComponentProps) => {
  const asu = () => {
    console.log("process.env.NODE_ENV", process.env.NODE_ENV);
    console.log("ENV.APP_ENV", ENV.APP_ENV);

    // Tree-shaking test (multiply should be included because it's used, divide should not)
    // See utils/utils.ts
    console.log(multiply(1, 3));

    // Dynamic import examples
    import(/*webpackChunkName: "Utils" */ "../utils/kambing").then(module => module.kambing());

    if (0 === 2 - 2) {
      import(/*webpackChunkName: "Utils" */ "../utils/macan").then(module => module.macan());
    }
  };

  console.log("Main", props);
  asu();

  const rootContext = React.useContext(RootCtx);
  setTimeout(() => rootContext.setLocale("id"), 1000); // Simulate dynamic translation changes

  return (
    <>
      <Nav />
      Main <br />
      <FormattedMessage id="hello" />
    </>
  );
};
