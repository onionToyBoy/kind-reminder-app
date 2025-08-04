/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { useEffect } from 'react';
import { RootNavigator } from './src/navigators/RootNavigator';
import { useInitialRoute } from './src/hooks';

function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

  const initialRoute = useInitialRoute();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator initialRoute={initialRoute} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
