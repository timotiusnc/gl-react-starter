/*
 * NestedCtx.ts
 * Declaration of root (top-level) context.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: June 6nd 2019
 * -----
 * Last Modified: June 6th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";

export interface RootContext {
  locale: string;
  theme: string;
  setLocale: (locale: string) => void;
}

export const NestedCtx = React.createContext<RootContext>({
  locale: "id",
  theme: "light",
  setLocale: (locale: string) => undefined
});
