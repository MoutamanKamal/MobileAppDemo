import React from 'react';
import AppNavigation from '@navigation';
import {PaperProvider} from 'react-native-paper';
import {THEMES} from '@theme';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18n/i18n';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {useFlipper} from '@react-navigation/devtools';
const InitializeApp = () => {
  const navigationRef = useNavigationContainerRef();
  const appState = useSelector(state => state.app);
  useFlipper(navigationRef);
  const {currentCountry, activeLanguage} = appState || {};
  const activeTheme = currentCountry ? THEMES[currentCountry] : undefined;
  React.useMemo(() => {
    i18n.changeLanguage(activeLanguage);
  }, [activeLanguage]);

  return (
    <NavigationContainer ref={navigationRef}>
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <PaperProvider theme={activeTheme}>
          <AppNavigation />
        </PaperProvider>
      </I18nextProvider>
    </NavigationContainer>
  );
};

export default InitializeApp;
