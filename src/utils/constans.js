import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const resizeModes = {
  COVER: 'cover',
  CONTAIN: 'contain',
  CENTER: 'center',
};

const status = [
  {
    id: 1,
    name: 'Alive',
    value: 'alive',
  },
  {
    id: 2,
    name: 'Dead',
    value: 'dead',
  },
  {
    id: 3,
    name: 'Unknown',
    value: 'unknown',
  },
];
const genders = [
  {
    id: 1,
    name: 'Male',
    value: 'male',
  },
  {
    id: 2,
    name: 'Female',
    value: 'female',
  },
  {
    id: 3,
    name: 'Genderless',
    value: 'genderless',
  },
  {
    id: 4,
    name: 'Unknown',
    value: 'unknown',
  },
];
const locationTypes = [
  {
    id: 1,
    name: 'Planet',
    value: 'planet',
  },
  {
    id: 2,
    name: 'Cluster',
    value: 'cluster',
  },
  {
    id: 3,
    name: 'Resort',
    value: 'resort',
  },
];
const dimentions = [
  {
    id: 1,
    name: 'Unknown',
    value: 'unknown',
  },
  {
    id: 2,
    name: 'Cronenberg Dimension',
    value: 'cronenberg Dimension',
  },
];
export {width, height, resizeModes, status, genders, locationTypes, dimentions};
