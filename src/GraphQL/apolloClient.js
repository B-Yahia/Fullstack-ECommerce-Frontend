import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://185.170.196.9/graphql" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function AppWithProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
