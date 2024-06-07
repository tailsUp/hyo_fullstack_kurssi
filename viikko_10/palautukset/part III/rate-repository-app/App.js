//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, Alert, Pressable } from 'react-native';

import { NativeRouter }   from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Main               from './src/Main'
import createApolloClient from './src/util/apolloClient';

import AuthStorage        from './src/util/authStorage';
import AuthStorageContext from './src/context/AuthStorageContext';

const authStorage         = new AuthStorage();
const apolloClient        = createApolloClient(authStorage);

//<StatusBar style='auto' />

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;
