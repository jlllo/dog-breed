import { Reducer } from 'redux';
import { DogsBreedDataState, DogsBreedTypes } from './types';

const INITIAL_STATE: DogsBreedDataState = {
  email: 'newusername@gmail.com',
  token: '',
  breeds: ['chihuahua', 'husky', 'pug', 'labrador'],
  dogs: {
    chihuahua: [{
      id: 0, title: '', link: '',
    }],
    husky: [
      {
        id: 0, title: '', link: '',
      }],
    pug: [
      {
        id: 0, title: '', link: '',
      },
    ],
    labrador: [
      {
        id: 0, title: '', link: '',
      },
    ],
  },
  authenticated: false,
  loading: true,
  error: false,
  message: {
    theme: 'warning',
    title: 'Warning',
    subtitle: 'API is not responding.',
    show: false,
  },
};

const reducer: Reducer<DogsBreedDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DogsBreedTypes.SET_DOGS_CHIHUAHUA:
      return {
        ...state,
        loading: true,
        error: false,
        dogs: {
          ...state.dogs, chihuahua: action.payload,
        },
      };

    case DogsBreedTypes.SET_DOGS_HUSKY:
      return {
        ...state,
        loading: true,
        error: false,
        dogs: {
          ...state.dogs, husky: action.payload,
        },
      };

    case DogsBreedTypes.SET_DOGS_PUG:
      return {
        ...state,
        loading: true,
        error: false,
        dogs: {
          ...state.dogs, pug: action.payload,
        },
      };

    case DogsBreedTypes.SET_DOGS_LABRADOR:
      return {
        ...state,
        loading: true,
        error: false,
        dogs: {
          ...state.dogs, labrador: action.payload,
        },
      };

    case DogsBreedTypes.CLEAR_DOGS:
      return {
        ...state,
        loading: true,
        error: false,
        dogs: {
          chihuahua: [],
          husky: [],
          pug: [],
          labrador: [],
        },
      };

    case DogsBreedTypes.LOAD_FAILURE:
      return {
        ...state, loading: true, error: true,
      };

    case DogsBreedTypes.CLEAR_ERROR:
      return {
        ...state, loading: false, error: false,
      };

    case DogsBreedTypes.SET_EMAIL:
      return {
        ...state, loading: true, error: false, email: action.payload,
      };

    case DogsBreedTypes.SET_TOKEN:
      return {
        ...state, loading: true, error: false, token: action.payload,
      };

    case DogsBreedTypes.SET_AUTHENTICATED:
      return {
        ...state, authenticated: action.payload,
      };

    case DogsBreedTypes.SET_LOADING:
      return {
        ...state, loading: action.payload,
      };

    case DogsBreedTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case DogsBreedTypes.SET_SHOW_MESSAGE:
      return {
        ...state,
        message: {
          ...state.message, show: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
