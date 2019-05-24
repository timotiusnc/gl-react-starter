/*
 * LoadableReject.tsx
 * PoC for when the promise for loadable is fail (promise rejected).
 * In this LoadableReject component, we reject the promise randomly based on the current milliseconds
 * so we will be able to try the "retry" props (provided by React Loadable)
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 21st 2019
 * -----
 * Last Modified: May 21st 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { GLLoadable, GLLoadableOpts } from "../../helpers/GLLoadable";

import { Loading } from "./Loading";

const loadableOptions: GLLoadableOpts = {
  loader,
  loading: Loading,
};

function loader() {
  if (Date.now() % 2 === 0) {
    return import(/*webpackChunkName: "AsyncTest" */"../Test");
  }

  return new Promise<{ default: React.ComponentType<any> }>((_, reject) => reject("Error"));
}

export const LoadableReject = GLLoadable(loadableOptions);
