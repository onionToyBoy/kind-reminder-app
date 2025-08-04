import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface IUIScreenContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
