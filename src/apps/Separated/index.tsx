/*
 * index.ts
 * File to implement everything on "domain" folder
 * e.g. GLLoadable is implemented using GLReactSuspense (from "common" folder)
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: June 6th 2019
 * -----
 * Last Modified: June 6th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { GLReactSuspense } from "@common/GLLoadable";
import { GLLoadable, GLLoadableOpts } from "@domain/GLLoadable";
import * as React from "react";

import { Authed } from "./components/Authed";
import { Landing } from "./components/Landing";

export const loadable: GLLoadable = (opts: GLLoadableOpts) => GLReactSuspense(opts);

export const Separated = () => {
  const x = Math.floor(Math.random() * 10);
  console.log("x", x);
  return x % 2 === 0 ? <Landing /> : <Authed />;
};
