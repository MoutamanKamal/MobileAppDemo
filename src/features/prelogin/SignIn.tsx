import React, {useEffect} from 'react';
import {TextInput, Container, Button, Spacer, Link} from '@components';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SIGNIN_SCHEMA} from '@utils';
import {PreferencesContext} from '@store';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'navigation';

const SignIn = () => {
  const {t} = useTranslation();
  const validationErrors = t('validationErrors', {returnObjects: true});
  const navigation = useNavigation();
  const {currentCountry} = React.useContext(PreferencesContext);
  const {
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(SIGNIN_SCHEMA),
  });

  useEffect(() => {
    navigation.setOptions({title: "t('signin.title')"});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = () => {
    navigation.navigate(Routes.NAVIGATIOR_POST_LOGIN, Routes.ROUTE_DETAILS);
  };

  return (
    <Container.Flex>
      <Controller
        name="username"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            label={t('signin.username')}
            onChangeText={(inputValue: string) => {
              onChange(inputValue);
            }}
            value={value}
            error={errors?.username?.message}
            helperText={
              errors?.username?.message
                ? validationErrors?.username?.[currentCountry]
                : ''
            }
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            label={t('signin.password')}
            onChangeText={(inputValue: string) => {
              onChange(inputValue);
            }}
            value={value}
            error={errors?.password?.message}
            secureTextEntry
          />
        )}
      />
      <Text>
        {t('signin.signupLink')}
        <Link
          color="primary"
          onPress={() => {
            navigation.navigate(Routes.ROUTE_SIGNUP);
          }}>
          {t('signin.signupHere')}
        </Link>
      </Text>

      <Spacer size={12} />
      <Button primary onPress={onSubmit}>
        {t('signin.buttonLabel')}
      </Button>
    </Container.Flex>
  );
};

export default SignIn;
