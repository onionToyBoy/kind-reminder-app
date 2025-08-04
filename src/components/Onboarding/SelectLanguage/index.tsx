import { View, StyleSheet, Pressable } from 'react-native';
import { ISelectLanguageProps } from './types';
import { UIText } from '../../UIComponents';
import { COLORS } from '../../../assets/COLORS';

export const SelectLanguage = (props: ISelectLanguageProps) => {
  const { onSelect, selected } = props;

  return (
    <View style={styles.container}>
      <Pressable
        style={StyleSheet.flatten([
          styles.activeContainer,
          selected === 'ru' && styles.notActiveContainer,
        ])}
        onPress={() => onSelect('en')}
      >
        <UIText
          style={StyleSheet.flatten([
            styles.activeText,
            selected === 'ru' && styles.notActiveText,
          ])}
        >
          English
        </UIText>
      </Pressable>
      <Pressable
        style={StyleSheet.flatten([
          styles.activeContainer,
          selected === 'en' && styles.notActiveContainer,
        ])}
        onPress={() => onSelect('ru')}
      >
        <UIText
          style={StyleSheet.flatten([
            styles.activeText,
            selected === 'en' && styles.notActiveText,
          ])}
        >
          Русский
        </UIText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  activeContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: COLORS.DIM_GRAY,
  },
  notActiveContainer: {
    backgroundColor: COLORS.WHITE_FEVER,
  },
  activeText: {
    fontWeight: '600',
    color: COLORS.WHITE,
  },
  notActiveText: {
    fontWeight: '400',
    color: COLORS.DIM_GRAY,
  },
});
