import { StyleSheet } from 'react-native';
import { colors, typography } from './../../config/styles';
export default StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
  },
  listView: {
    backgroundColor: colors.LightGrey,
  }, 
  titleView: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontFamily: typography.fontMainLight,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    flex: .5,

  },
  description: {
    fontFamily: typography.fontMainLight,
    color: colors.MediumGrey,
    padding: 5,
    fontSize: 16
  },
  section: {
    padding: 5,
    backgroundColor: colors.LightGrey
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: colors.LightGrey,
  },
  sectionText: {
    fontSize: 16,
    paddingLeft: 15,
  },
})
