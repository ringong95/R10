import { StyleSheet } from 'react-native';
import { colors, typography } from './../../config/styles';
export default StyleSheet.create({
  container: {
    // alignSelf: 'center',
    margin: 5,
    backgroundColor: 'white',
    // alignItems: 'center',
  },
  listView:{
    // padding: 5,
    // backgroundColor: colors.LightGrey,
  },
  title: {
    fontFamily: typography.fontMain,
    fontSize: 20
  },
  description: {
    fontFamily: typography.fontMainLight,
    fontSize: 16
  },
  section: {
    padding: 5,
    backgroundColor: colors.LightGrey
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E',
  },
  sectionText: {
    fontSize: 16,
    paddingLeft: 15,
  },
})
