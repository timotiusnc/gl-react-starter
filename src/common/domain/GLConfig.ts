import { GLLoadableOpts } from "./GLLoadable/GLLoadable";

export { GLLoadableOpts, GLReactLoadable, GLReactSuspense } from "./GLLoadable/GLLoadable";

export interface GLConfig {
  loadable: (opts: GLLoadableOpts) => React.ComponentType;
}
