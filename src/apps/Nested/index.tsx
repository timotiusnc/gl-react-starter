/*
 * index.ts
 * File to implement everything on "domain" folder
 * e.g. GLLoadable is implemented using GLReactSuspense (from "common" folder)
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 28th 2019
 * -----
 * Last Modified: June 6th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { GLReactSuspense } from "@common/GLLoadable";
import { GLLoadable, GLLoadableOpts } from "@domain/GLLoadable";
import * as React from "react";
import { Route, Router, Switch } from "react-router";

import history from "./helpers/browserHistory";

export const loadable: GLLoadable = (opts: GLLoadableOpts) => GLReactSuspense(opts);

const LandingLoadable = loadable({
  loader: () => import("./components/Landing")
});

const MainLoadable = loadable({
  loader: () => import("./components/Main")
});

export const Nested = () => {
  return (
    <Router history={history}>
      <Route exact={true} path="/" component={LandingLoadable} />
      <Route path="/main" component={MainLoadable} />
    </Router>
  );
};
