import React from 'react';
import { ApolloProvider } from '@apollo/client';
import AppNavigator from './src/navigation/AppNavigator';
import client from './src/apolloClient';

const App = () => (
  <ApolloProvider client={client}>
    <AppNavigator />
  </ApolloProvider>
);

export default App;