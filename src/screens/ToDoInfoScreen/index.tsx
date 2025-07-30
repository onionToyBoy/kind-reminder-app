import { Text, View, StyleSheet } from 'react-native';

export const ToDoInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ToDoInfoScreen</Text>
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
