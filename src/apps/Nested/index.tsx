/*
 * index.ts
 * File to implement everything on "domain" folder
 * e.g. GLLoadable is implemented using GLReactSuspense (from "common" folder)
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: June 6th 2019
 * -----
 * Last Modified: June 7th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { GLReactSuspense } from "@common/GLLoadable";
import { I18NProvider } from "@common/i18n";
import { GLLoadable, GLLoadableOpts } from "@domain/GLLoadable";
import * as React from "react";
import { Route, Router } from "react-router";

import { NestedCtx } from "./context/NestedCtx";
import history from "./helpers/browserHistory";

export const loadable: GLLoadable = (opts: GLLoadableOpts) => GLReactSuspense(opts);

const LandingLoadable = loadable({
  loader: () => import(/*webpackChunkName: "Landing" */ "./components/Landing")
});

const MainLoadable = loadable({
  loader: () => import(/*webpackChunkName: "Main" */ "./components/Main")
});

export const Nested = () => {
  const [locale, setLocale] = React.useState("en");
  const [theme] = React.useState("light");

  return (
    <NestedCtx.Provider value={{ locale, theme, setLocale }}>
      <I18NProvider locale={locale}>
        <Router history={history}>
          <Route exact={true} path="/" component={LandingLoadable} />
          <Route path="/main" component={MainLoadable} />
        </Router>
      </I18NProvider>
    </NestedCtx.Provider>
  );
};
