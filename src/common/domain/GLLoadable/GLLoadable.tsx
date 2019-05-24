import * as React from "react";
import * as Loadable from "react-loadable";

import OptionsWithoutRender = LoadableExport.OptionsWithoutRender;
import { LoadableErrBoundary } from "./Error/LoadableErrBoundary";
import { LoadableError } from "./Error/LoadableError";
import { LoadingLoadable } from "./Loading/LoadingLoadable";
import { LoadingSuspense } from "./Loading/LoadingSuspense";

export interface GLLoadableOpts {
  loading?: React.ComponentType<any> | (() => null);
  error?: React.ComponentType<any> | (() => null);
  loader(): Promise<{ default: React.ComponentType<any> }>; // For React Loadable
  loader(): Promise<{ default: any }>; // For React Suspense
}

export function GLReactLoadable(opts: GLLoadableOpts) {
  const loadableOptions: OptionsWithoutRender<any> = {
    loader: opts.loader,
    loading: opts.loading ? opts.loading : LoadingLoadable,
  };

  return Loadable(loadableOptions);
}

export function GLReactSuspense(opts: GLLoadableOpts) {
  const LoadedComp = React.lazy(opts.loader);
  const Loading = opts.loading ? opts.loading : LoadingSuspense;
  const Error = opts.error ? opts.error : LoadableError;

  return class Comp extends React.Component {
    public render() {
      return (
        <LoadableErrBoundary error={<Error />}>
          <React.Suspense fallback={<Loading />}>
            <LoadedComp {...this.props} />
          </React.Suspense>
        </LoadableErrBoundary>
      );
    }
  };
}
