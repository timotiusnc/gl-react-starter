/*
 * Loading.tsx
 * Loading component for React Suspense.
 * Read https://github.com/jamiebuilds/react-loadable for more info.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 21st 2019
 * -----
 * Last Modified: May 29th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";
import * as Loadable from "react-loadable";

import { LoadableError } from "../Error/LoadableError";

export class LoadingLoadable extends React.Component<Loadable.LoadingComponentProps> {
  public render() {
    if (this.props.error) {
      return (
        <>
          <LoadableError />
          <button onClick={this.props.retry}>Retry</button>
        </>
      );
    }

    if (this.props.timedOut) {
      return <div>Taking a long time... <button onClick={this.props.retry}>Retry</button></div>;
    }

    if (this.props.pastDelay) {
      return <div>Loading...</div>;
    }

    // The loader has just started
    return null;
  }
}
