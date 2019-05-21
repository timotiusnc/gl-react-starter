import { GLLoadable, GLLoadableOpts } from "../helpers/GLLoadable";
import { Loading } from "./Loading";

const loadableOptions: GLLoadableOpts = {
  loader: () => import(/*webpackChunkName: "AsyncTest" */"../components/Test"),
  // loader: () => new Promise<{ default: any }>((_, reject) => reject({ default: "asu" })),
  loading: Loading,
  // loading: () => <div>Loading asu</div>,
};

export const AsyncTest = GLLoadable(loadableOptions);
