/*
 * envs.ts
 * Centralize constants from "process.env" and set global variables so it will be accessible
 * in dev console.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 21st 2019
 * -----
 * Last Modified: June 3rd 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

/*
 * We need to do INTERMEDIATE_ENV and ENV so that webpack will not uglify them.
 * With this method, there will be string "GRAPHQL_URL: <whatever process.env.GRAPHQL_URL is>".
 * We need it because deployment script will do a string replacement for that string so it will have the correct value.
 * If it's uglified, the replacement will fail.
 *
 * Example usage: we need to replace GRAPHQL URL for production/staging/development environment.
 * The value for GRAPHQL_URL is supplied through .env files.
 * It will then put into process.env variables via "dotenv-webpack" plugin in webpack config files
 * (e.g. webpack.dev.js).
 *
 * Special case for process.env.NODE_ENV, it looks like it hasn't been set anywhere.
 * However, it's actually set by webpack itself.
 * Webpack's mode (`development` or `production`) uses "DefinePlugin" to set `process.env.NODE_ENV` value
 * to `development` or `production` respectively. Therefore we don't need to set it again.
 * See https://webpack.js.org/configuration/mode/#root for more details.
 */
const INTERMEDIATE_ENV = {
  APP_ENV: process.env.NODE_ENV,
  GRAPHQL_URL: process.env.GRAPHQL_URL,
};
export const ENV = INTERMEDIATE_ENV;

/*
 * Add some vars into global JavaScript variable (window).
 * The values are set via webpack.DefinePlugin.
 * The function will need to be called somewhere in the code (preferrable in index.ts).
 *
 * Example usage: we want to expose APP_VERSION variable (user can write it down on dev console)
 * and it will show the value we provided.
 *
 * To add your own global var:
 * 1. Augment window variable in typings.d.ts with your own global var
 * 2. Declare your global var (also in typings.d.ts) so we can access the value from webpack.DefinePlugin
 * 3. Init the variable in this file (initGlobalVar function).
 */
export function initGlobalVar() {
  window.APP_VERSION = APP_VERSION;
  console.log("window version", window.APP_VERSION);
}
