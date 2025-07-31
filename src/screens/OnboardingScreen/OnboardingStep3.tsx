import { Text, View, StyleSheet } from 'react-native';

export const OnboardingStep3 = () => {
  return (
    <View style={styles.container}>
      <Text>STEP 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
