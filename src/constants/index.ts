export enum COUNTRIES {
  AE = 'AE',
  IN = 'IN',
  US = 'US',
  UK = 'UK',
}
export const USERNAME_VALIDATION = {
  [COUNTRIES.AE]: /^[a-z0-9]{5,}$/i,
  [COUNTRIES.IN]: /^[a-z][a-z0-9]{5,}$/i,
  [COUNTRIES.US]: /^(?=.*[A-Z]).{6,}$/,
  [COUNTRIES.UK]: /^(?=.*[0-9]).{7,}$/,
};

export enum LANGUAGES {
  EN = 'en',
  ES = 'es',
  DE = 'de',
}
