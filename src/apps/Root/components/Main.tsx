import * as React from "react";

import { ENV } from "../../../constants/envs";
import { multiply } from "../utils/utils";

import { Nav } from "./Nav";

export class Main extends React.Component<{}> {
  public render() {
    console.log("Main", this.props);
    this._asu();

    return (
      <>
        <Nav />
        Main
      </>
    );
  }

  private _asu() {
    console.log("process.env.NODE_ENV", process.env.NODE_ENV);
    console.log("ENV.APP_ENV", ENV.APP_ENV);

    // Tree-shaking test (multiply should be included because it's used, divide should not)
    // See utils/utils.ts
    console.log(multiply(1, 3));

    // Dynamic import examples
    import(/*webpackChunkName: "Utils" */"../utils/kambing").then((module) => module.kambing());

    if (0 === 2 - 2) {
      import(/*webpackChunkName: "Utils" */"../utils/macan").then((module) => module.macan());
    }
  }
}
