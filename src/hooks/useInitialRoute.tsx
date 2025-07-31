import { useEffect, useState } from 'react';
import { StorageController } from '../utils';

export const useInitialRoute = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const check = async () => {
      const seen = await StorageController.getBool('hasSeenOnboarding');
      setInitialRoute(seen ? 'ToDoListScreen' : 'OnboardingScreen');
    };
    check();
  }, []);

  return initialRoute;
};
