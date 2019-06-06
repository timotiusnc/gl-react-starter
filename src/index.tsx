/*
 * index.tsx
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 3rd 2019
 * -----
 * Last Modified: June 6th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Nested } from "./apps/Nested";
import { Root } from "./apps/Root/Root";
import { Separated } from "./apps/Separated";
import { ENV, initGlobalVar } from "./common/constants/index";

const { GRAPHQL_URL } = ENV;
initGlobalVar();

// React render test
ReactDOM.render(<Nested />, document.getElementById("root"));

console.log("graphql", GRAPHQL_URL);

// Deliberate runtime error to see if the output sourcemap is correct
const asu = (x: number): undefined | { a: number } => {
  return x > 0 ? { a: x } : undefined;
};
const retval = asu(0);
console.log(retval!.a);
