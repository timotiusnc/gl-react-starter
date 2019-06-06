import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

export const RootApolloClient = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

// RootApolloClient.query({
//   query: gql`
//     {
//       rates(currency: "USD") {
//         currency
//       }
//     }
//   `
// }).then(result => console.log("asuuuu", result));
