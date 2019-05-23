/*
 * envs.ts
 * Centralize constants from process.env.
 * We need to do INTERMEDIATE_ENV and ENV so that webpack will not uglify them.
 * With this method, there will be string "GRAPHQL_URL: <whatever process.env.GRAPHQL_URL is>".
 * We need it because deployment script will do a string replacement for that string so it will have the correct value.
 * If it's uglified, the replacement will fail.
 *
 * Example usage: we need to replace GRAPHQL URL for production/staging/development environment.
 * The value for GRAPHQL_URL is supplied through .env files.
 * It will then put into process.env variables via "dotenv-webpack" plugin in webpack config files (e.g. webpack.dev.js).
 *
 * Special case for process.env.NODE_ENV, it looks like it hasn't been set anywhere. It's actually set by webpack itself.
 * Webpack's mode (`development` or `production`) uses "DefinePlugin" to set `process.env.NODE_ENV` value
 * to `development` or `production` respectively. Therefore we don't need to set it again.
 * See https://webpack.js.org/configuration/mode/#root for more details.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 21st 2019
 * -----
 * Last Modified: May 23rd 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

const INTERMEDIATE_ENV = {
  APP_ENV: process.env.NODE_ENV,
  GRAPHQL_URL: process.env.GRAPHQL_URL
};

export const ENV = INTERMEDIATE_ENV;
