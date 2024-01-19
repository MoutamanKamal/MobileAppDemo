import {COUNTRIES} from '@constants';
import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

export const BlueTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000022',
    secondary: '#de3c4b',
  },
};
export const GreenTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#619b8a',
    secondary: '#fe7f2d',
  },
};

export const RedTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#de3c4b',
    secondary: '#619b8a',
  },
};
export const YellowTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fe7f2d',
    secondary: '#619b8a',
  },
};

export const THEMES = {
  [COUNTRIES.AE]: BlueTheme,
  [COUNTRIES.IN]: GreenTheme,
  [COUNTRIES.US]: RedTheme,
  [COUNTRIES.UK]: YellowTheme,
};
