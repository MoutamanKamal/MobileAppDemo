import {USERNAME_VALIDATION} from '@constants';
import * as yup from 'yup';

export const usernameValidation = (username: string, country: string) => {
  return (USERNAME_VALIDATION as {[key: string]: RegExp})[country].test(
    username,
  );
};
const AUTHENTICATION_SCHEMA = {
  username: yup
    .string()
    .test('username', 'Invalid username', function (value = '') {
      const {country} = this.parent;
      return usernameValidation(value, country);
    }),
  password: yup.string().required(),
};
export const SIGNUP_SCHEMA = yup.object().shape({
  ...AUTHENTICATION_SCHEMA,
  country: yup.string().required(),
  email: yup.string().email().required(),
  language: yup.string(),
});
export const SIGNIN_SCHEMA = yup.object().shape({
  ...AUTHENTICATION_SCHEMA,
});
