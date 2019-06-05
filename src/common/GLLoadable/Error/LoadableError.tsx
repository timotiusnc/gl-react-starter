/*
 * LoadableError.tsx
 * The UI that will be rendered and showed to the user when there's a loadable error.
 * Used in LoadableErrBoundary and Loading.tsx
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 21st 2019
 * -----
 * Last Modified: May 24th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";

export class LoadableError extends React.Component<{}> {
  public render() {
    return <>Error loading loadable component!!</>;
  }
}
