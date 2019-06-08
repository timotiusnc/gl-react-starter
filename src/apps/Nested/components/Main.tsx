import gql from "graphql-tag";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { FormattedMessage } from "react-intl";
import { Link, Route, RouteComponentProps } from "react-router-dom";

import { NestedApolloClient } from "../apollo";

import { One } from "./One";
import { Two } from "./Two";

const Main = (props: RouteComponentProps) => {
  console.log("Main", props);

  NestedApolloClient.query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `,
    context: {
      headers: {
        // We can change individual request's header this way (via context)
        // "additional-this-request": "special additional header value in this request only"
      }
    }
  }).then(result => console.log(result));

  return (
    <ApolloProvider client={NestedApolloClient}>
      <Link to="/">Home</Link>
      <Link to={`${props.match.url}/one`}>One</Link>
      <Link to={`${props.match.url}/two`}>Two</Link>
      <FormattedMessage id="hello" />
      <div>Main</div>
      <Route path={`${props.match.path}/one`} component={One} />
      <Route path={`${props.match.path}/two`} component={Two} />
    </ApolloProvider>
  );
};

export default Main;
