/*
 * index.ts
 * Initialization of Apollo Client.
 *
 * You have dependencies to apollo-boost, why not use ApolloClient from apollo-boost?
 * Because we need custom links and that option is not available in current ApolloClient from apollo-bost constructor.
 * The custom link we need is we will need to "split" the request conditionally between HttpLink and WsLink.
 * Currently, the "split" is not here. If you don't need it, you can safely use ApolloClient from apollo-boost.
 *
 * Notes for onError from apollo-link-error:
 * Inspired from Sherlock project and https://www.apollographql.com/docs/link/links/error/.
 * Why cast networkError to any? Because if not: "Property 'response' does not exist on type 'Error | ServerError | ServerParseError'".
 * error.response should have something but it's undefined. Known error at https://github.com/apollographql/apollo-link/issues/855.
 * We also can't check the type using typeof (only for primitive type) or instanceof (only for class/interface).
 * "response" exists on ServerError or ServerParseError. Both are type declaration (not class/interface).
 * To see details on ServerError and ServerParseError, it's in "import { ServerError, ServerParseError } from "apollo-link-http-common".
 *
 * Notes for createHttpLink from apollo-link-http:
 * apollo-link-http full options: https://www.apollographql.com/docs/link/links/http/
 *
 * Reference:
 * - Apollo Link blog post: https://blog.apollographql.com/apollo-link-the-modular-graphql-network-stack-3b6d5fcf9244
 * - Apollo Boost blog post: https://blog.apollographql.com/zero-config-graphql-state-management-27b1f1b3c2c3
 * - Apollo Boost config options: https://www.apollographql.com/docs/react/essentials/get-started/#apollo-boost
 * - Apollo Client constructor options: https://www.apollographql.com/docs/react/api/apollo-client/
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: June 6th 2019
 * -----
 * Last Modified: June 8th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { ApolloClient, ApolloLink, InMemoryCache } from "apollo-boost";
import { ErrorResponse, onError } from "apollo-link-error";
import { createHttpLink } from "apollo-link-http";

import history from "../helpers/browserHistory";

const link = ApolloLink.from([
  onError((error: ErrorResponse) => {
    console.log("error", error);
    if (error.graphQLErrors) {
      console.log("[GraphQL error]", error.graphQLErrors);
    }

    if (error.networkError) {
      console.log("[Network error]", error.networkError);

      const networkError: any = error.networkError;
      if (!networkError.response) return;

      const response: Response = networkError.response;
      console.log("response", response);

      // Our server can set the redirected value to true and url value to the redirected URL
      // Thanks to Lutvianes Advendianto <lutvianes.advendianto@gdplabs.id>
      if (!response.redirected && !response.url) return;
      history.push(response.url);
    }
  }),
  createHttpLink({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    headers: {
      // "additional-all-request": "special additional header value in all request"
    }
  })
]);

export const NestedApolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
