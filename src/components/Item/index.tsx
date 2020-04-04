import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

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

interface Item {
  url: string
}

export default function Item({ url }: Item) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
      </View>
    </TouchableOpacity>

  );
}
