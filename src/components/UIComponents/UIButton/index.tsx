import { StyleSheet, Pressable } from 'react-native';
import { IUIButtonProps } from './types';
import { UIText } from '../UIText';
import { COLORS } from '../../../assets/COLORS';

export const UIButton = (props: IUIButtonProps) => {
  const {
    title,
    onPress = () => {},
    withoutBorder,
    style,
    titleStyle,
    weight = '600',
  } = props;

  return (
    <Pressable
      style={StyleSheet.flatten([
        withoutBorder ? {} : styles.container,
        style && style,
      ])}
      onPress={onPress}
    >
      {title && (
        <UIText style={titleStyle} weight={weight} color={COLORS.WHITE}>
          {title}
        </UIText>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#6B8E23',
  },
});
