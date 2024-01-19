import * as Actions from './actions';
import {LANGUAGES, COUNTRIES} from '@constants';

export const initialState: any = {
  activeLanguage: LANGUAGES.EN,
  currentCountry: COUNTRIES.AE,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case Actions.SET_CURRENT_COUNTRY:
      return {
        ...state,
        currentCountry: action.payload,
      };
    case Actions.SET_ACTIVE_LANGUAGE:
      return {
        ...state,
        activeLanguage: action.payload,
      };
    default:
      return state;
  }
}
