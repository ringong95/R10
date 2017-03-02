import { StyleSheet } from 'react-native';
import { typography, colors } from './../../config/styles'

export default StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: typography.fontMain,
    color: colors.Purple,
  },
  container: {
    padding: 10,
  },
  text: {
    fontFamily: typography.fontMainLight
  }
})
