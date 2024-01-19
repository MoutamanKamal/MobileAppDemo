import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';

import {rootReducer as appReducer} from './reducer';
import rootSaga from './saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app'],
};
const persistedReducer = persistReducer(persistConfig, appReducer);
const middleware = [];

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
middleware.push(logger);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {default as PreferencesContext} from './context/PrefrenceContext';
