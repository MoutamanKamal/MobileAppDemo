import React from 'react';
import {InitializeApp} from '@features';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <InitializeApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
