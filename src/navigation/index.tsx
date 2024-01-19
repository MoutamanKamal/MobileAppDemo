import React from 'react';
import * as Routes from './routes';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUp, SignIn, Details} from '@features';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';

const Stack = createStackNavigator();

const PreloginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.ROUTE_SIGNUP}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        key={Routes.ROUTE_SIGNUP}
        name={Routes.ROUTE_SIGNUP}
        component={SignUp}
      />
      <Stack.Screen
        key={Routes.ROUTE_SIGNIN}
        name={Routes.ROUTE_SIGNIN}
        component={SignIn}
      />
    </Stack.Navigator>
  );
};

const PostloginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.ROUTE_SIGNIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        key={Routes.ROUTE_DETAILS}
        name={Routes.ROUTE_DETAILS}
        component={Details}
      />
    </Stack.Navigator>
  );
};

export const AppNavigation = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={Routes.ROUTE_SIGNUP}
      screenOptions={{
        title: t('signup.title'),
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.surface,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        key={Routes.NAVIGATIOR_PRE_LOGIN}
        name={Routes.NAVIGATIOR_PRE_LOGIN}
        component={PreloginStack}
      />
      <Stack.Screen
        key={Routes.NAVIGATIOR_POST_LOGIN}
        name={Routes.NAVIGATIOR_POST_LOGIN}
        component={PostloginStack}
      />
    </Stack.Navigator>
  );
};
export * as Routes from './routes';
export default AppNavigation;
