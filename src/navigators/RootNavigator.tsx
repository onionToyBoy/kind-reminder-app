import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen, ToDoInfoScreen, ToDoListScreen } from '../screens';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator({ initialRoute }) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRoute}
    >
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="ToDoListScreen" component={ToDoListScreen} />
      <Stack.Screen name="ToDoInfoScreen" component={ToDoInfoScreen} />
    </Stack.Navigator>
  );
}
