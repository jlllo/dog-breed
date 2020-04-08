import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/ducks/DogsBreedData/types';

const styles = StyleSheet.create({
  item: {
    padding: 2,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  image: {
    width: 88.5,
    height: 88.5,
    borderRadius: 5,
  },
});

interface Props {
  keyNumber: number
}

export default function ImageLoading({ keyNumber }: Props) {
  const { loading } = useSelector((state: ApplicationState) => state.dogsBreedData);

  return (
    <View style={styles.item}>
      <SkeletonContent
        isLoading={loading}
        animationDirection="horizontalRight"
        layout={[{
          key: keyNumber,
          ...styles.image,
        }]}
      >
        <Text>{keyNumber}</Text>
      </SkeletonContent>
    </View>

  );
}
