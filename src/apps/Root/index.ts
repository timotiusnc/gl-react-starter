/*
 * index.ts
 * A main program for Root app.
 * RootConfig is the implementation of GLConfig.
 * For example: the loadable function is implemented using GLReactSuspense.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 28th 2019
 * -----
 * Last Modified: May 30th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { GLReactSuspense } from "@common/GLLoadable";
import { GLLoadable, GLLoadableOpts } from "@domain/GLLoadable";

export { GLLoadableOpts } from "@domain/GLLoadable";

export const loadable: GLLoadable = (opts: GLLoadableOpts) => GLReactSuspense(opts);
