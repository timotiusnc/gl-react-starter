import gql from "graphql-tag";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { FormattedMessage } from "react-intl";
import { Link, Route } from "react-router-dom";

import { NestedApolloClient } from "../apollo";

import { One } from "./One";
import { Two } from "./Two";

const Main = () => {
  NestedApolloClient.query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  }).then(result => console.log(result));

  return (
    <ApolloProvider client={NestedApolloClient}>
      <Link to="/">Home</Link>
      <Link to="/main/one">One</Link>
      <Link to="/main/two">Two</Link>
      <FormattedMessage id="hello" />
      <div>Main</div>
      <Route path="/main/one" component={One} />
      <Route path="/main/two" component={Two} />
    </ApolloProvider>
  );
};

export default Main;
