import { StyleProp, TextStyle } from 'react-native';

export interface IUITextProps {
  children: string;
  style?: StyleProp<TextStyle>;
  size?: number;
  color?: string;
  weight?: '400' | '500' | '600' | '700';
}
