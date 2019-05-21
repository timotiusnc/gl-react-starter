/*
 * LoadableError.tsx
 * The UI that will be rendered and showed to the user when there's a loadable error.
 * Used in LoadableErrBoundary and Loading.tsx
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 21st 2019
 * -----
 * Last Modified: May 21st 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";
import { Nav } from "../Nav";

export class LoadableError extends React.Component<{}> {
  public render() {
    return (
      <>
        <Nav />
        Error loading loadable component!!
      </>
    );
  }
}
