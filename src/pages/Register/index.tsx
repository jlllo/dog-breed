import PropTypes from 'prop-types';
import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../../styles/global';

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
  button: {
    borderRadius: 8,
    backgroundColor: theme.primaryColor,
    height: 50,
    width: '38%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

function Register({ navigation }) {
  const [email, setEmail] = React.useState('newusername@gmail.com');

  const onChangeText = (value: React.SetStateAction<string>) => {
    setEmail(value);
  };

  return (
    <View style={styles.container}>
      <Text>Type your e-mail here: </Text>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => onChangeText(text)}
        value={email}
      />

      <View style={styles.button}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListDogs')}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;
