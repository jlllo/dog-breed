import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { theme } from '../../styles/global';
import GridDogs from '../GridDogs';

const Tab = createMaterialTopTabNavigator();

export default function TopTabDogs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#dedede',
        pressColor: theme.primaryColor,
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {
          width: 100,
          borderColor: theme.primaryColor,
        },
        style: {
          backgroundColor: theme.primaryColor,
        },
        indicatorStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Tab.Screen name="Chihuahua">
        { () => <GridDogs breed="chihuahua" />}
      </Tab.Screen>
      <Tab.Screen name="Husky">
        {() => (<GridDogs breed="husky" />)}
      </Tab.Screen>
      <Tab.Screen name="Pug">
        {() => (<GridDogs breed="pug" />)}
      </Tab.Screen>
      <Tab.Screen name="Labrador">
        {() => (<GridDogs breed="labrador" />)}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
