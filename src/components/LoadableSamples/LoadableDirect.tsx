/*
 * LoadableDirect.tsx
 * PoC for when we want to provide component directly (without dynamic import).
 * It's also delayed for several milliseconds to show the loading component.
 *
 * This kind of defeat the purpose of code-splitting via asynchronously loading component.
 * This is just to show that it works.
 *
 * Unfortunately, this will only work for React Suspense.
 * For React-Loadable, it will throw error:
 * "Element type is invalid: expected a string (for built-in components) or a class/function
 * (for composite components) but got: object"
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 21st 2019
 * -----
 * Last Modified: May 21st 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";

import { GLLoadable, GLLoadableOpts } from "../../helpers/GLLoadable";
import Test from "../Test";

import { LoadingSuspense } from "./LoadingSuspense";

const loadableOptions: GLLoadableOpts = {
  loader: () => new Promise<{ default: any }>((resolve, _) => {
    setTimeout(() => resolve({ default: () => <Test /> }), 500);
  }),
  loading: LoadingSuspense,
};

export const LoadableDirect = GLLoadable(loadableOptions);
