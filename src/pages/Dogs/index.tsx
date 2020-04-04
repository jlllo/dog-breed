import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ListDogs from '../../containers/ListDogs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Dogs = () => (
  <View style={styles.container}>
    <ListDogs breed="chihuahua" />
  </View>
);

export default Dogs;
