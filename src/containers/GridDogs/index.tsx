import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import ImageGrid from '../../components/ImageGrid';
import { ApplicationState, DogsBreedData } from '../../store/ducks/DogsBreedData/types';
import { theme } from '../../styles/global';

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
  item: {
    margin: 0,
    padding: 0,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 32,
  },
  informations: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 2,
  },
  text: {
    lineHeight: 25,
    fontSize: 11,
    fontWeight: 'bold',
    color: theme.secondaryColor,
  },
});

interface Props {
  breed: string
}

function selectBreed(breed: string, dogs: DogsBreedData) {
  if (breed === 'husky') {
    return dogs.husky;
  } if (breed === 'pug') {
    return dogs.pug;
  } if (breed === 'labrador') {
    return dogs.labrador;
  }
  return dogs.chihuahua;
}

export default function GridDogs({ breed }: Props) {
  const { dogs, loading } = useSelector((state: ApplicationState) => state.dogsBreedData);
  const dogbreed = selectBreed(breed, dogs);
  const start = 0;
  const total = dogbreed.length;
  const [index, setIndex] = useState(1);
  const [end, setEnd] = useState(28);
  const [photos, setPhotos] = useState(dogbreed.slice(start, end));

  useEffect(() => {
    setPhotos(dogbreed.slice(start, end));
  }, [index, end]);

  function nextPage() {
    if (!loading && end !== total) {
      setEnd((end + 16) >= total ? total : end + 16);
      setIndex(index + 1);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={photos}
          renderItem={({ item }) => <ImageGrid url={item.link} />}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator
          onEndReached={nextPage}
          onEndReachedThreshold={0.3}
          numColumns={4}
        />
      </SafeAreaView>
    </View>
  );
}
