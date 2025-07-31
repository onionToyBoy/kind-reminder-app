import { Text, View, StyleSheet } from 'react-native';

export const OnboardingStep1 = () => {
  return (
    <View style={styles.container}>
      <Text>STEP 1</Text>
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
