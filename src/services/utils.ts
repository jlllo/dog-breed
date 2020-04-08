import { Dimensions } from 'react-native';

export const getRand = () => new Date().getTime().toString() + Math.floor(Math.random() * 1000);

export const generateLayout = (n: number) => {
  const array = Array.from(Array(n).keys());

  return array.map((item, index) => ({
    key: index,
    width: Dimensions.get('window').width / 4.4,
    height: Dimensions.get('window').width / 4.4,
    borderRadius: 5,
    margin: 2,
  }));
};
