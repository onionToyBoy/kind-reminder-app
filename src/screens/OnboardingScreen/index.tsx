import { View, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { OnboardingStep1 } from './OnboardingStep1';
import { OnboardingStep2 } from './OnboardingStep2';
import { OnboardingStep3 } from './OnboardingStep3';

export const OnboardingScreen = () => {
  const onboardingScreens = [
    { screen: <OnboardingStep1 /> },
    { screen: <OnboardingStep2 /> },
    { screen: <OnboardingStep3 /> },
  ];

  return (
    <PagerView style={styles.container} initialPage={0}>
      {onboardingScreens?.map((el, id) => (
        <View key={id}>{el?.screen}</View>
      ))}
    </PagerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
