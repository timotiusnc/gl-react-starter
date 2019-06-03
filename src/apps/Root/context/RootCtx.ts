/*
 * RootCtx.ts
 * Declaration of root (top-level) context.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: June 2nd 2019
 * -----
 * Last Modified: June 3rd 2019
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

export const RootCtx = React.createContext<RootContext>({
  locale: "id",
  theme: "light",
  setLocale: (locale: string) => undefined,
});
