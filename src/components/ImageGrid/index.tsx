import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import ImageFull from '../ImageFull';

const styles = StyleSheet.create({
  item: {
    padding: 2,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  image: {
    width: Dimensions.get('window').width / 4.4,
    height: Dimensions.get('window').width / 4.4,
    borderRadius: 5,
  },
});

interface PropsImageGrid {
  url: string
}

export default function ImageGrid({ url }: PropsImageGrid) {
  const [open, setOpen] = useState(false);

  return (
    <TouchableOpacity onPress={() => setOpen(true)}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
      </View>

      <ImageFull open={open} setOpen={(value) => setOpen(value)} url={url} />
    </TouchableOpacity>

  );
}
