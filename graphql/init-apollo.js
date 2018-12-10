import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createBridgeLink } from 'apollo-bridge-link';
import resolvers from './resolvers';
import schema from './schema';

const internals = {
    apolloClient: null
};

export default (initialState) => {

    if (!process.browser) {
        return internals.create(initialState);
    }

    // Reuse client on the client-side
    if (!internals.apolloClient) {
        internals.apolloClient = internals.create(initialState);
    }

    return internals.apolloClient;
};

internals.create = (initialState) => {

    return new ApolloClient({
        connectToDevTools: !!process.browser,
        ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
        cache: new InMemoryCache().restore(initialState || {}),
        link: createBridgeLink({
            schema,
            resolvers,
            mock: false
        })
    });
};
