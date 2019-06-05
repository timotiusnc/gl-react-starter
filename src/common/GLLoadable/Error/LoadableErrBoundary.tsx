/*
 * LoadableErrBoundary.tsx
 * React component that will catch error.
 * This component will not render the error component itself.
 * The rendered error component is in "error" props.
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

interface ErrorProps {
  error: React.ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

export class LoadableErrBoundary extends React.Component<ErrorProps, ErrorState> {
  public static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  // public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  // //TODO: send to error reporting service
  // }

  public render() {
    if (this.state.hasError) {
      return this.props.error;
    }

    return this.props.children;
  }
}
