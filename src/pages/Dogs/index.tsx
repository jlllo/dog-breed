/* eslint-disable no-shadow */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import GridDogs from '../../containers/GridDogs';
import GridLoading from '../../containers/GridLoading';
import { ApplicationState } from '../../store/ducks/DogsBreedData/types';
import { theme } from '../../styles/global';

const Tab = createMaterialTopTabNavigator();

interface Props {
  breed: string
  loading: boolean
}

const GetGrid = ({ breed, loading }: Props) => (
  loading ? <GridLoading /> : <GridDogs breed={breed} />
);

export default function Dogs({ navigation }) {
  const { loading, token } = useSelector((state: ApplicationState) => state.dogsBreedData);

  useEffect(() => {
    if (token === '') {
      navigation.navigate('Register');
    }
  }, [token]);

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
        { () => <GetGrid breed="chihuahua" loading={loading} /> }
      </Tab.Screen>
      <Tab.Screen name="Husky">
        { () => <GetGrid breed="husky" loading={loading} />}
      </Tab.Screen>
      <Tab.Screen name="Pug">
        { () => <GetGrid breed="pug" loading={loading} />}
      </Tab.Screen>
      <Tab.Screen name="Labrador">
        { () => <GetGrid breed="labrador" loading={loading} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

Dogs.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
