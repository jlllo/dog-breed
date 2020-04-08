/**
 * Action Types
 */

export enum DogsBreedTypes {
  SET_EMAIL = '@DOG_BREED_DATA/SET_EMAIL',
  SET_TOKEN = '@DOG_BREED_DATA/SET_TOKEN',
  SET_LOADING = '@DOG_BREED_DATA/SET_LOADING',
  SET_BREED = '@DOG_BREED_DATA/SET_BREED',
  GET_STATE_DATA = '@DOG_BREED_DATA/GET_STATE_DATA',
  SET_DOGS_CHIHUAHUA = '@DOG_BREED_DATA/SET_DOGS_CHIHUAHUA',
  SET_DOGS_HUSKY = '@DOG_BREED_DATA/SET_DOGS_HUSKY',
  SET_DOGS_PUG = '@DOG_BREED_DATA/SET_DOGS_PUG',
  SET_DOGS_LABRADOR = '@DOG_BREED_DATA/SET_DOGS_LABRADOR',
  LOAD_FAILURE = '@DOG_BREED_DATA/LOAD_FAILURE',
  CLEAR_DOGS = '@DOG_BREED_DATA/CLEAR_DOGS',
  CLEAR_ERROR = '@DOG_BREED_DATA/CLEAR_ERROR',
  SET_MESSAGE = '@DOG_BREED_DATA/SET_MESSAGE',
  SET_SHOW_MESSAGE = '@DOG_BREED_DATA/SET_SHOW_MESSAGE',
}

/**
 * Breed Data Type
 */
export interface BreedData {
  id: number
  title: string
  link: string
}

/**
 * Dogs Data Type
 */
export interface DogsBreedData {
  chihuahua: BreedData[]
  husky: BreedData[]
  pug: BreedData[]
  labrador: BreedData[]
}

export interface MessageData {
  theme: string,
  title: string,
  subtitle: string,
  show: boolean
}

/**
 * State Type
 */
export interface DogsBreedDataState {
  email: string
  token: string
  breeds: string[]
  dogs: DogsBreedData
  loading: boolean
  error: boolean
  message: MessageData,
}

/**
 * Application State Type
 */
export interface ApplicationState {
  dogsBreedData: DogsBreedDataState
}
