import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

export type ThemeType = typeof DefaultTheme;

export type PreferencesType = {
  currentCountry: string;
  setCurrentCountry: (country: string) => void;
  activeLanguage: string;
  setActiveLanguage: (language: string) => void;
};
