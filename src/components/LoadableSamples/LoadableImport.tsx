/*
 * LoadableImport.tsx
 * PoC for when we use the usual import syntax (with Loading component for React Suspense).
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 21st 2019
 * -----
 * Last Modified: May 24th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { GLLoadable, GLLoadableOpts } from "../../helpers/GLLoadable/GLLoadable";

const loadableOptions: GLLoadableOpts = {
  loader: () => import(/*webpackChunkName: "AsyncTest" */"../TestRoute"),
};

export const LoadableImport = GLLoadable(loadableOptions);
