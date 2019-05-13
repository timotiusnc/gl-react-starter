/*
 * index.tsx
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 3rd 2019
 * -----
 * Last Modified: May 13th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

// To access webpcak.DefinePlugin (otherwise it will yield TS compile error)
declare const APP_VERSION: string;

import { multiply } from "./utils/utils";

const asu = (x: number): undefined | { a: number } => {
  return x > 0 ? { a: x } : undefined;
};

window.APP_VERSION = APP_VERSION;
console.log(multiply(1, 2));

const retval = asu(0);
console.log(retval!.a);

console.log("window version", window.APP_VERSION);
console.log(APP_VERSION);
