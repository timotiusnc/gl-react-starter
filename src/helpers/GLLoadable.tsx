import * as React from "react";
import * as Loadable from "react-loadable";
import OptionsWithoutRender = LoadableExport.OptionsWithoutRender;
import { LoadableErrBoundary } from "../components/LoadableSamples/LoadableErrBoundary";

export interface GLLoadableOpts {
  loading: React.ComponentType<any> | (() => null);
  loader(): Promise<{ default: React.ComponentType<any> }>; // For React Loadable
  loader(): Promise<{ default: any }>; // For React Suspense
}

export function GLLoadable(opts: GLLoadableOpts): React.ComponentType {
  return ReactSuspense(opts);
  // return ReactLoadable(opts);
}

function ReactLoadable(opts: GLLoadableOpts) {
  const loadableOptions: OptionsWithoutRender<any> = {
    loader: opts.loader,
    loading: opts.loading,
  };

  return Loadable(loadableOptions);
}

function ReactSuspense(opts: GLLoadableOpts) {
  const LoadedComp = React.lazy(opts.loader);
  return class Comp extends React.Component {
    public render() {
      return (
        <LoadableErrBoundary>
          <React.Suspense fallback={<opts.loading />}>
            <LoadedComp {...this.props} />
          </React.Suspense>
        </LoadableErrBoundary>
      );
    }
  };
}
