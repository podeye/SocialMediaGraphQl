import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {InMemoryCache,
        createHttpLink,
        ApolloProvider,
        ApolloClient} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
