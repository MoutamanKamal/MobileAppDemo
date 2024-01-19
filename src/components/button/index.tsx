import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as ButtonBase, useTheme} from 'react-native-paper';
const Button = props => {
  const {primary = false, children, ...rest} = props;

  return (
    <ButtonBase
      mode={primary ? 'contained' : 'outlined'}
      style={styles.button}
      {...rest}>
      {children}
    </ButtonBase>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
  },
});
