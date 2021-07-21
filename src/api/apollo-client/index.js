import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://metaphysika2.mybigcommerce.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlYXQiOjE2NTA4NzI5ODEsInN1Yl90eXBlIjoyLCJ0b2tlbl90eXBlIjoxLCJjb3JzIjpbImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJdLCJjaWQiOjEsImlhdCI6MTYxOTM0NTgyNCwic3ViIjoicXFvdGJjcTJpZHUxbWE3cGZrNXlrdmtjaDRmZ3U2YiIsInNpZCI6MTAwMTc4Njk3MiwiaXNzIjoiQkMifQ.xs_zPidhFzGvtczGzdPTJoZ4aeFwCvUrlOr1xb2AGzyh8t6GpTLVb2NOf4g01nXNKKI-GLADSVB-UNPnmdd_3g`
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
