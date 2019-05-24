import { GLConfig, GLLoadableOpts, GLReactSuspense } from "../../common/domain/GLConfig";

export { GLLoadableOpts } from "../../common/domain/GLConfig";

export const RootConfig: GLConfig = {
  loadable: (opts: GLLoadableOpts) => GLReactSuspense(opts),
};
