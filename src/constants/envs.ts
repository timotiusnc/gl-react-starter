/*
 * envs.ts
 * Centralize constants from process.env.
 * We need to do INTERNAL_ENV and ENV so that webpack will not uglify them.
 * With this method, there will be string "GRAPHQL_URL: <whatever process.env.GRAPHQL_URL> is".
 * We need it because deployment script will do a string replacement for that string so it will have the correct value.
 * If it's uglified, the replacement will fail.
 *
 * Example usage: we need to replace GRAPHQL URL for production/staging/development environment.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 21st 2019
 * -----
 * Last Modified: May 21st 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

const INTERNAL_ENV = {
  GRAPHQL_URL: process.env.GRAPHQL_URL,
};

export const ENV = INTERNAL_ENV;
