import { Platform } from 'react-native';

export const colors = {
  MediumGrey: "#999999",
  LightGrey: "#e6e6e6",
  Blue: '#8797D6',
  Purple: '#9963ea',
  Red: '#cf392a',
  White: 'white',
}
export const typography = {
  baseSize: 16,
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat'
    },
    android: {
      fontMain: 'Montserrat-regular',
    },
  }),
  fontMainLight: 'Montserrat-Light',

}