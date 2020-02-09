import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { getCookie } from '../lib/auth/session';
import resolvers from './resolvers';
import data from './state';
import typeDefs from './typeDefs';

const domain = 'localhost';
const protocol = 'http';
const port = 4000;

const customFetch = (uri, options) => {
  const token = getCookie('jwt', options);

  return fetch(uri, {
    ...options,
    headers: {
      ...options.headers,
      'x-access-token': token || '',
    },
  });
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${protocol}://${domain}:${port}/api`,
  fetch: customFetch,
  resolvers,
  typeDefs,
});

client.cache.writeData({ data });
client.onResetStore(() => client.cache.writeData({ data }));

export default withApollo(
  () => client, { getDataFromTree: 'ssr' }, // 'always', 'never', 'ssr'
);