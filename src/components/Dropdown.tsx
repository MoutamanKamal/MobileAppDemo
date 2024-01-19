import React from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTheme} from 'react-native-paper';
import {ThemeType} from 'types';

const Dropdown = (props: {
  value: any;
  items: any;
  open: any;
  setopen: any;
  onChange: any;
  error?: any;
}) => {
  const {value, items, open, setopen, onChange, error} = props;
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setopen}
      zIndex={open ? 100000 : 0}
      setValue={(callback: any) => onChange(callback())}
      style={{
        ...styles.dropdownStyle,
        ...(open && styles.openState),
        ...(error && styles.dropdownErrorState),
      }}
    />
  );
};

export default Dropdown;

const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    dropdownStyle: {
      borderRadius: theme.roundness,
      borderColor: theme.colors.outline,
    },
    dropdownErrorState: {
      borderColor: theme.colors.error,
      borderWidth: 2,
    },
    openState: {
      borderColor: theme.colors.primary,
      borderWidth: 3,
    },
  });
