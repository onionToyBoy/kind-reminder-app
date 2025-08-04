import { Text, StyleSheet } from 'react-native';
import { IUITextProps } from './types';
import { COLORS } from '../../../assets/COLORS';

export const UIText = (props: IUITextProps) => {
  const { style, size, color, children, weight } = props;

  return (
    <Text
      style={StyleSheet.flatten([
        styles.text,
        !!size && { fontSize: size },
        !!color && { color: color },
        !!weight && { fontWeight: weight },
        style,
      ])}
    >
      {children || ''}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: COLORS.EERIE_BLACK,
  },
});
