import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import { theme } from '../../styles/global';

const styles = StyleSheet.create({
  item: {
    padding: 2,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  imageFull: {
    width: 355,
    height: 355,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: theme.primaryColor,
    width: '40%',
    borderRadius: 7,
  },
  button: {
    borderRadius: 7,
    width: '100%',
    backgroundColor: theme.primaryColor,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface PropsImageFull {
  open: boolean
  setOpen(open: boolean): void
  url: string
}

export default function ImageFull({ open, setOpen, url }: PropsImageFull) {
  return (
    <Overlay
      isVisible={open}
      windowBackgroundColor="rgba(255, 255, 255, .6)"
      width={370}
      height={370}
      overlayStyle={{
        padding: 5,
      }}
      onBackdropPress={() => setOpen(false)}
    >
      <View style={styles.item}>
        <Image
          style={styles.imageFull}
          source={{
            uri: url,
          }}
        />
      </View>
    </Overlay>
  );
}

