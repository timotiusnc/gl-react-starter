export { GLLoadableOpts, GLReactLoadable, GLReactSuspense } from "./GLLoadable/GLLoadable";

export interface GLConfig {
  loadable(opts: any): React.ComponentType;
}
