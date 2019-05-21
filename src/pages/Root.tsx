import { createBrowserHistory } from "history";
import * as React from "react";
import { Route, Router, Switch } from "react-router";
import { LoadableDirect } from "../components/LoadableSamples/LoadableDirect";
import { LoadableImport } from "../components/LoadableSamples/LoadableImport";
import { LoadableReject } from "../components/LoadableSamples/LoadableReject";
import { Main } from "../components/Main";

export class Root extends React.Component<{}> {
  public render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/import" component={LoadableImport} />
          <Route exact={true} path="/reject" component={LoadableReject} />
          <Route exact={true} path="/direct" component={LoadableDirect} />
        </Switch>
      </Router>
    );
  }
}
