import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../../assets/COLORS';
import { IUIScreenContainerProps } from './types';

export const UIScreenContainer = (props: IUIScreenContainerProps) => {
  const { children, style } = props;

  return (
    <SafeAreaView style={StyleSheet.flatten([styles.container, style])}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE_FEVER,
    flex: 1,
  },
});
