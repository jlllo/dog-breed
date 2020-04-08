import Constants from 'expo-constants';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';
import { useDispatch, useSelector } from 'react-redux';
import { generateLayout } from '../../services/utils';
import { setLoading } from '../../store/ducks/DogsBreedData/actions';
import { ApplicationState } from '../../store/ducks/DogsBreedData/types';

const TIME_INTERVAL = 3000;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight - 16,
    width: '100%',
    padding: 9,
    paddingTop: 0,
    margin: 0,
  },
  skeletonContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default function GridLoading() {
  const { dogs, loading } = useSelector((state: ApplicationState) => state.dogsBreedData);
  const dispatch = useDispatch();

  function isLoaded() {
    return dogs.chihuahua.length > 1
        && dogs.husky.length > 1
        && dogs.pug.length > 1
        && dogs.labrador.length > 1;
  }

  useEffect(() => {
    if (isLoaded()) {
      setTimeout(() => dispatch(setLoading(false)), TIME_INTERVAL);
    }
  });

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <SkeletonContent
          containerStyle={styles.skeletonContent}
          isLoading={loading}
          animationDirection="horizontalLeft"
          layout={generateLayout(28)}
        />
      </SafeAreaView>
    </View>
  );
}
