import { createBrowserHistory } from "history";
import * as React from "react";
import { Route, Router, Switch } from "react-router";
import { AsyncTest } from "../components/AsyncTest";
import { Main } from "../components/Main";

export class Root extends React.Component<{}> {
  public render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/test" component={AsyncTest} />
        </Switch>
      </Router>
    );
  }
}
