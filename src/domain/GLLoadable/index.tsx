import * as React from "react";

export interface GLLoadableOpts {
  loading?: React.ComponentType<any> | (() => null);
  error?: React.ComponentType<any> | (() => null);
  // loader(): Promise<{ default: React.ComponentType<any> }>; // For React Loadable
  loader(): Promise<{ default: any }>; // For React Suspense
}

export type GLLoadable = (opts: GLLoadableOpts) => React.ComponentType<any>;
