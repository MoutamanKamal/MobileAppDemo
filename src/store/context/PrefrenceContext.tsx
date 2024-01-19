import {COUNTRIES} from '@constants';
import React from 'react';
import {PreferencesType} from 'types';

const PreferencesContext = React.createContext<PreferencesType>({
  currentCountry: COUNTRIES.AE,
  setCurrentCountry: (country: any) => {},
  activeLanguage: 'en',
  setActiveLanguage: (language: any) => {},
});

export default PreferencesContext;
