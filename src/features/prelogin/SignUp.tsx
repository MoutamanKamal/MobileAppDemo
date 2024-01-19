import React, {useEffect, useState} from 'react';
import {
  TextInput,
  Container,
  Button,
  Spacer,
  Link,
  Dropdown,
} from '@components';
import {Text, HelperText} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SecureStorage, SIGNUP_SCHEMA} from '@utils';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'navigation';
import {useDispatch} from 'react-redux';
import {SetupActions} from 'features/setup/actions';
import {useSelector} from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const appState = useSelector(state => state.app);

  const {activeLanguage, currentCountry} = appState || {};

  const countriesTranslationObject = t('countries', {returnObjects: true});
  const languagesTranslationObject = t('languages', {returnObjects: true});

  const validationErrors = t('validationErrors', {returnObjects: true});
  const countriesDisplay = Object.keys(countriesTranslationObject).map(
    (key: string) => {
      return {label: countriesTranslationObject[key], value: key};
    },
  );
  const availableLanguages = Object.keys(languagesTranslationObject).map(
    (key: string) => {
      return {label: languagesTranslationObject[key], value: key};
    },
  );
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    resolver: yupResolver(SIGNUP_SCHEMA),
  });

  const selectedCountry = getValues('country');
  const selectedLanguage = getValues('language');
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const onSubmit = data => {
    const {username, email, password, ...preference} = data;
    SecureStorage.setMultiValue(preference);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    selectedCountry &&
      dispatch(SetupActions.setCurrentCountry(selectedCountry));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  useEffect(() => {
    selectedLanguage && SetupActions.setActiveLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <Container.Flex>
      <Spacer />
      <Controller
        name="language"
        control={control}
        render={({field}) => (
          <Dropdown
            value={activeLanguage}
            items={availableLanguages}
            open={languageDropdownOpen}
            setopen={setLanguageDropdownOpen}
            onChange={field.onChange}
          />
        )}
      />
      <Spacer />
      <Controller
        name="country"
        control={control}
        render={({field}) => (
          <Dropdown
            value={currentCountry}
            items={countriesDisplay}
            open={countryDropdownOpen}
            setopen={setCountryDropdownOpen}
            onChange={field.onChange}
          />
        )}
      />
      <HelperText type={'error'} visible={Boolean(errors?.country?.message)}>
        {errors?.country?.message}
      </HelperText>
      <Controller
        name="username"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            label={t('signup.username')}
            onChangeText={(inputValue: string) => {
              onChange(inputValue);
            }}
            value={value}
            error={errors?.username?.message}
            helperText={
              errors?.username?.message
                ? validationErrors?.username?.[selectedCountry]
                : ''
            }
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            label={t('signup.email')}
            onChangeText={(inputValue: string) => {
              onChange(inputValue);
            }}
            value={value}
            error={errors?.email?.message}
            helperText={errors?.email?.message || ''}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            label={t('signup.password')}
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
        {t('signup.signinLink')}
        <Link
          color="primary"
          onPress={() => {
            navigation.navigate(Routes.ROUTE_SIGNIN);
          }}>
          {t('signup.signinHere')}
        </Link>
      </Text>

      <Spacer size={12} />
      <Button primary onPress={handleSubmit(onSubmit)}>
        {t('signup.buttonLabel')}
      </Button>
    </Container.Flex>
  );
};
export default SignUp;
