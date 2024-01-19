import React from 'react';
import {StyleSheet} from 'react-native';

import {
  HelperText,
  TextInput as TextInputBase,
  useTheme,
} from 'react-native-paper';
const TextInput = (props: any) => {
  const {helperText, error} = props;
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <>
      <TextInputBase
        mode="outlined"
        style={styles.fieldStyle}
        autoCapitalize={'none'}
        {...props}
      />
      <HelperText type={error ? 'error' : 'info'} visible={helperText}>
        {helperText}
      </HelperText>
    </>
  );
};

export default TextInput;

const getStyles = theme =>
  StyleSheet.create({
    containerStyle: {
      padding: 0,
      flex: 1,
      flexGrow: 1,
      width: '100%',
    },

    fieldStyle: {
      margin: 0,
      width: '100%',
      backgroundColor: theme.colors.surface,
    },
  });
