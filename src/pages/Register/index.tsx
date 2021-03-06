import PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../components/Alert';
import { isValidEmail } from '../../services/validation';
import { loadFailure, setEmail, setMessage, setShowMessage } from '../../store/ducks/DogsBreedData/actions';
import { ApplicationState } from '../../store/ducks/DogsBreedData/types';
import { theme } from '../../styles/global';

let timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
    width: 300,
    paddingLeft: 15,
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
    shadowColor: '#777',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  text: {
    color: '#fff',
  },
  alertContainer: {
    backgroundColor: theme.primaryColor,
    width: '40%',
    borderRadius: 7,
  },
});

export default function Register({ navigation }) {
  const { authenticated, error, token, message, email, loading } = useSelector((state: ApplicationState) => state.dogsBreedData);
  const dispatch = useDispatch();
  const [registering, setRegistering] = useState(false);

  const handleClose = () => {
    dispatch(setShowMessage(false));
  };

  const handleErrors = () => {
    if (isValidEmail(email) && registering && error && !token) {
      dispatch(setMessage({
        theme: 'warning',
        title: 'Warning',
        subtitle: 'API is not responding.',
        show: false,
      }));
      dispatch(setShowMessage(true));
    } else if (!isValidEmail(email) && registering) {
      dispatch(setMessage({
        theme: 'danger',
        title: 'Error',
        subtitle: 'Type a valid e-mail.',
        show: true,
      }));
    }
  };

  useEffect(() => {
    handleErrors();
    if (isValidEmail(email) && registering && loading && authenticated) {
      navigation.navigate('Dogs');
    } else if (!loading && registering) {
      setRegistering(false);
    }
  }, [authenticated, loading, registering, token, error]);

  const handleChange = (value: React.SetStateAction<string>) => {
    dispatch(setEmail(String(value)));
  };

  const handleKeyPress = () => (
    clearTimeout(timer)
  );

  function handleRegister() {
    if (isValidEmail(email)) {
      dispatch(setEmail(email));
      setRegistering(true);
      setTimeout(() => setRegistering(false), 1000);
    } else {
      setRegistering(true);
      dispatch(loadFailure());
      setTimeout(() => setRegistering(false), 600);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.primaryColor} translucent />
      <Text>Type your e-mail here: </Text>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => handleChange(text)}
        onKeyPress={() => handleKeyPress()}
        value={email}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          loading={registering}
          buttonStyle={styles.button}
          onPress={() => handleRegister()}
        />
      </View>
      <View style={styles.alertContainer}>
        <Alert show={message.show} handleClose={handleClose} />
      </View>

    </View>
  );
}

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
