export const SET_CURRENT_COUNTRY = 'SET_CURRENT_COUNTRY';
export const SET_ACTIVE_LANGUAGE = 'SET_ACTIVE_LANGUAGE';
export const SET_GLOBAL_ERROR = 'SET_GLOBAL_ERROR';

export const SetupActions = {
  setCurrentCountry: data => {
    return {type: SET_CURRENT_COUNTRY, payload: data};
  },
  setActiveLanguage: data => {
    return {type: SET_ACTIVE_LANGUAGE, payload: data};
  },

  setGlobalError: data => {
    return {type: SET_GLOBAL_ERROR, payload: data};
  },
};

export type SetupActions = typeof SetupActions;
