/*
 * GLLoadable.ts
 * Interface for Loadable so it works with (hopefully) any loadable framework.
 * Currently, only tested for React Suspense and React Loadable.
 *
 * The "Promise<{default: any}>"" is inspired from React Suspense code:
 * function lazy<T extends ComponentType<any>>(
 *     factory: () => Promise<{ default: T }>
 * ): LazyExoticComponent<T>;
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 31st 2019
 * -----
 * Last Modified: June 1st 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";

export interface GLLoadableOpts {
  loading?: React.ComponentType<any> | (() => null);
  error?: React.ComponentType<any> | (() => null);
  loader(): Promise<{ default: any }>;
}

export type GLLoadable = (opts: GLLoadableOpts) => React.ComponentType<any>;
