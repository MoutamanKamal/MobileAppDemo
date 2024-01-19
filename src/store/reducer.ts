import {setupReducer} from '@features';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  app: setupReducer || {},
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
