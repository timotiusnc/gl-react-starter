/*
 * Root.tsx
 * Samples for:
 * - Lazy load
 * - Router
 * - Code-splitting:
 *   - TestRoute, TestRoute2, TestRoute3 are all using AnotherTest component.
 *   - TestRoute1, TestRoute2, TestRoute3 chunks will be generated.
 *   - AnotherTest will be grouped into one chunk with name: TestRoute1~TestRoute2~TestRoute3.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 28th 2019
 * -----
 * Last Modified: June 5th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { I18NProvider } from "@common/i18n/I18NProvider";
import * as React from "react";
import { Route, Router, Switch } from "react-router";

import { Main } from "./components/Main";
import { TestRouteProps } from "./components/TestRoute";
import { TestRoute2Props } from "./components/TestRoute2";
import { TestRoute3Props } from "./components/TestRoute3";
import { RootCtx } from "./context/RootCtx";
import createBrowserHistory from "./helpers/browserHistory";
import { loadable } from "./index";

const TestRoute = import(/*webpackChunkName: "TestRoute1" */ "./components/TestRoute");

const LoadableImport = loadable({
  loader: () => TestRoute
}) as React.ComponentType<TestRouteProps>;

const LoadableImport2 = loadable({
  loader: () => import(/*webpackChunkName: "TestRoute2" */ "./components/TestRoute2")
}) as React.ComponentType<TestRoute2Props>;

const LoadableImport3 = loadable({
  loader: () => import(/*webpackChunkName: "TestRoute3" */ "./components/TestRoute3")
}) as React.ComponentType<TestRoute3Props>;

const LoadableReject = loadable({
  loader: () => {
    if (Date.now() % 2 === 0) {
      return new Promise<{ default: any }>((resolve, _) => {
        setTimeout(() => resolve({ default: () => <div>asu</div> }), 500);
      });
    }

    return new Promise<{ default: React.ComponentType<any> }>((_, reject) => reject("Error"));
  }
});

const LoadableDirect = loadable({
  loader: () =>
    new Promise<{ default: any }>((resolve, _) => {
      setTimeout(() => resolve({ default: () => <div>asu</div> }), 500);
    })
});

export const Root = (props: any) => {
  const [locale, setLocale] = React.useState("en");
  const [theme] = React.useState("light");

  return (
    <RootCtx.Provider value={{ locale, theme, setLocale }}>
      <I18NProvider locale={locale}>
        <Router history={createBrowserHistory}>
          <Switch>
            <Route exact={true} path="/" component={Main} />
            <Route exact={true} path="/import" component={LoadableImport} />
            <Route exact={true} path="/importo" component={LoadableImport2} />
            <Route exact={true} path="/reject" component={LoadableReject} />
            <Route exact={true} path="/direct" component={LoadableDirect} />
          </Switch>
        </Router>
      </I18NProvider>
    </RootCtx.Provider>
  );
};
