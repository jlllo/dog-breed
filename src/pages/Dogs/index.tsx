import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import GridDogs from '../../containers/GridDogs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Dogs = () => (
  <View style={styles.container}>
    <GridDogs breed="chihuahua" />
  </View>
);

export default Dogs;
