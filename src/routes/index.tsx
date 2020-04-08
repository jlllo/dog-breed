import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button, Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import Dogs from '../pages/Dogs';
import Register from '../pages/Register';
import { clearDogs, setLoading, setToken } from '../store/ducks/DogsBreedData/actions';
import { theme } from '../styles/global';

const Stack = createStackNavigator();

function Routes() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setToken(''));
    dispatch(clearDogs());
    dispatch(setLoading(false));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Register',
            headerTitleStyle: {
              flexGrow: 1,
              alignSelf: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: theme.primaryColor,
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleContainerStyle: {
              height: 40,
            },
          }}
        />
        <Stack.Screen
          name="Dogs"
          component={Dogs}
          options={{
            headerRight: () => (
              <Button
                onPress={handleLogout}
                icon={(
                  <Icon
                    name="power-off"
                    type="font-awesome"
                    size={20}
                    color="white"
                  />
                )}
                buttonStyle={{
                  backgroundColor: theme.primaryColor,
                  padding: 15,
                  borderRadius: 50,
                }}
              />
            ),
            title: 'Dogs',
            headerTitleStyle: {
              flexGrow: 1,
              alignSelf: 'center',
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: theme.primaryColor,
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleContainerStyle: {
              height: 40,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
