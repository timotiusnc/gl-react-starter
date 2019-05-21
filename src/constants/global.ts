/*
 * global.ts
 * Add some vars into global JavaScript variable (window).
 * The values are set via webpack.DefinePlugin.
 * The function will need to be called somewhere in the code (preferrable in index.ts).
 *
 * Example usage: we want to expose APP_VERSION variable (user can write it down on dev console)
 * and it will show the value we provided.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 21st 2019
 * -----
 * Last Modified: May 21st 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

// To access webpcak.DefinePlugin variables (otherwise it will yield TS compile error)
declare const APP_VERSION: string;

export function defineGlobalVar() {
  window.APP_VERSION = APP_VERSION;
  console.log("window version", window.APP_VERSION);
}
