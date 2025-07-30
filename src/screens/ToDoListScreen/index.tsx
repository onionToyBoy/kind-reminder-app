import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TToDoListScrenProps } from './types';

export const ToDoListScreen = (props: TToDoListScrenProps) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ToDoInfoScreen')}>
        <Text>ToDoListScreen</Text>
      </TouchableOpacity>
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
