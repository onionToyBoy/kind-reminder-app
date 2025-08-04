import { Text, StyleSheet } from 'react-native';
import { UIScreenContainer } from '../../components';

export const OnboardingStep3 = () => {
  return (
    <UIScreenContainer style={styles.container}>
      <Text>STEP 3</Text>
    </UIScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
