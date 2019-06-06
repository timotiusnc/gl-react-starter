/*
 * index.ts
 * File to implement everything on "domain" folder
 * e.g. GLLoadable is implemented using GLReactSuspense (from "common" folder)
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 28th 2019
 * -----
 * Last Modified: June 6th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { GLReactSuspense } from "@common/GLLoadable";
import { GLLoadable, GLLoadableOpts } from "@domain/GLLoadable";

export const loadable: GLLoadable = (opts: GLLoadableOpts) => GLReactSuspense(opts);
