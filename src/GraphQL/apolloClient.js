import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://apitestdomain.site:8084/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function AppWithProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
