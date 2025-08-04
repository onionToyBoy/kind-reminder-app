import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IUIButtonProps {
  title?: string;
  withoutBorder?: boolean;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  weight?: '400' | '500' | '600' | '700';
}
