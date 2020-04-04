import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TopTabDogs from '../containers/TopTabDogs';
import Register from '../pages/Register';
import { theme } from '../styles/global';

const Stack = createStackNavigator();

function Routes() {
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
          name="ListDogs"
          component={TopTabDogs}
          options={{
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
