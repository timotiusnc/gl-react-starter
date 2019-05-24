/*
 * LoadableErrBoundary.tsx
 * React component that will catch error.
 * This component will not render the error component itself.
 * The rendered erro component is in LoadableError.
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

import { LoadableError } from "./LoadableError";

interface ErrorState {
  hasError: boolean;
}

export class LoadableErrBoundary extends React.Component<{}, ErrorState> {
  public static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <LoadableError />
      );
    }

    return this.props.children;
  }
}
