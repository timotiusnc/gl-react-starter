/*
 * index.tsx
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 3rd 2019
 * -----
 * Last Modified: May 20th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

// To access webpcak.DefinePlugin (otherwise it will yield TS compile error)
declare const APP_VERSION: string;

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Root } from "./pages/Root";
import { multiply } from "./utils/utils";

const asu = (x: number): undefined | { a: number } => {
  return x > 0 ? { a: x } : undefined;
};

// Tree-shaking test (multiply should be included because it's used, divide should not)
// See utils/utils.ts
console.log(multiply(1, 3));

// Dynamic import examples
import(/*webpackChunkName: "Utils" */"./utils/kambing").then((module) => module.kambing());

if (0 === 2 - 2) {
  import(/*webpackChunkName: "Utils" */"./utils/macan").then((module) => module.macan());
}

// global variable test
window.APP_VERSION = APP_VERSION;
console.log("window version", window.APP_VERSION);
console.log(APP_VERSION);

// React render test
ReactDOM.render(<Root />, document.getElementById("root"));

// Deliberate runtime error to see if the output sourcemap is correct
const retval = asu(0);
console.log(retval!.a);
