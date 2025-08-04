import { Text, StyleSheet } from 'react-native';
import { UIScreenContainer } from '../../components';

export const OnboardingStep2 = () => {
  return (
    <UIScreenContainer style={styles.container}>
      <Text>STEP 2</Text>
    </UIScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
