import { Text, View, StyleSheet } from 'react-native';

export const OnboardingStep2 = () => {
  return (
    <View style={styles.container}>
      <Text>STEP 2</Text>
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
