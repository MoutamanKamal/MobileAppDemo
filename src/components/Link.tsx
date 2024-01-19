import React from 'react';
import {Text, StyleSheet, TextComponent} from 'react-native';
import {useTheme} from 'react-native-paper';

type LinkProps = TextComponent & {
  color?: string;
};

const Link: React.FC<LinkProps> = ({color = 'primary', children, ...rest}) => {
  const theme = useTheme();
  const linkColor = theme.colors[color];
  const styles = StyleSheet.create({
    linkText: {
      color: linkColor,
    },
  });

  return (
    <Text style={styles.linkText} {...rest}>
      {children}
    </Text>
  );
};

Link.defaultProps = {
  color: 'primary',
};

export default Link;
