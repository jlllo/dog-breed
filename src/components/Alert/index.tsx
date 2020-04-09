import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/ducks/DogsBreedData/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertTitle: {
    fontSize: 20,

  },
  alertSubtitle: {
    fontSize: 14,

  },
  alertButton: {
    color: '#fff',
  },
});

interface Props {
  show: boolean
  handleClose(): void
}

export default function ({ show, handleClose }: Props) {
  const { message } = useSelector((state: ApplicationState) => state.dogsBreedData);

  return (
    <View style={styles.container}>
      <SCLAlert
        theme={message.theme}
        show={show}
        title={message.title}
        subtitle={message.subtitle}
        onRequestClose={handleClose}
        titleStyle={styles.alertTitle}
        subtitleStyle={styles.alertSubtitle}
        slideAnimationDuration={400}
      >
        <SCLAlertButton theme={message.theme} onPress={handleClose} textStyle={styles.alertButton}>
          Ok
        </SCLAlertButton>
      </SCLAlert>
    </View>
  );
}
