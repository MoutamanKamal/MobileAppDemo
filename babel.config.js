module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    'optional-require',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@features': './src/features/index',
          '@components': './src/components/index',
          '@theme': './src/theme/index',
          '@i18n/*': './src/@i18n/*',
          '@utils': './src/utils/index',
          '@constants': './src/constants/index',
          '@types': './src/types/index',
          '@store': './src/store/index',
          '@navigation': './src/navigation/index',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
