import { StyleSheet } from 'react-native';
import { colors } from './../../config/styles';
export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    margin: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 25
  },
  description: {
    fontSize: 16
  },
  section: {
    padding: 5,
    backgroundColor: colors.LightGrey
  },
  sectionText: {
    fontSize: 16,
    paddingLeft: 15,
  },
})
