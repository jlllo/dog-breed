import { action } from 'typesafe-actions';
import { BreedData, DogsBreedTypes, MessageData } from './types';

export const loadDogsChihuahua = (dogs: BreedData[]) => action(DogsBreedTypes.SET_DOGS_CHIHUAHUA, dogs);

export const loadDogsHusky = (dogs: BreedData[]) => action(DogsBreedTypes.SET_DOGS_HUSKY, dogs);

export const loadDogsPug = (dogs: BreedData[]) => action(DogsBreedTypes.SET_DOGS_PUG, dogs);

export const loadDogsLabrador = (dogs: BreedData[]) => action(DogsBreedTypes.SET_DOGS_LABRADOR, dogs);

export const clearDogs = () => action(DogsBreedTypes.CLEAR_DOGS);

export const clearError = () => action(DogsBreedTypes.CLEAR_ERROR);

export const setEmail = (email: string) => action(DogsBreedTypes.SET_EMAIL, email);

export const setToken = (token: string) => action(DogsBreedTypes.SET_TOKEN, token);

export const setLoading = (loading: boolean) => action(DogsBreedTypes.SET_LOADING, loading);

export const loadFailure = () => action(DogsBreedTypes.LOAD_FAILURE);

export const setMessage = (message: MessageData) => action(DogsBreedTypes.SET_MESSAGE, message);

export const setShowMessage = (show: boolean) => action(DogsBreedTypes.SET_SHOW_MESSAGE, show);
