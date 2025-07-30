import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ToDoInfoScreen, ToDoListScreen } from '../screens';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ToDoListScreen" component={ToDoListScreen} />
      <Stack.Screen name="ToDoInfoScreen" component={ToDoInfoScreen} />
    </Stack.Navigator>
  );
}
