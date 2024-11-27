import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { store, persistor } from './store/store';
import AppRoutes from './navigationApp';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer >
              <AppRoutes />
            </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};
export default App;