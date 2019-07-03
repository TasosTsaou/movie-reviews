import React from 'react';
import { View } from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import Config from './src/config';
import AuthMiddleware from './src/components/AuthMiddleware';
import setupRedux from './src/redux';

// Disable warnings
console.disableYellowBox = Config.disableWarnings;

const { store, persistor } = setupRedux();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<View></View>} persistor={persistor}>
          <AuthMiddleware />
        </PersistGate>
      </Provider>
    );
  }
}