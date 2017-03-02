import { StyleSheet } from 'react-native';
import { colors, typography } from './../../config/styles';
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    backgroundColor: 'white',
  },
  location: {
    color: colors.MediumGrey,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: typography.fontMain
  },
  name: {
    fontSize: 16,
    textAlign: 'center',
  },
  time: {
    fontFamily: typography.fontMain,
    color: colors.Red,
    marginBottom: 10,
  },
  title: {
    flex: .25,
    fontFamily: typography.fontMainLight,
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 8,
    marginBottom: 8,
  },
  description: {
    flex: 1,
    fontFamily: typography.fontMainLight,
    fontSize: 18,
    lineHeight: 25,
    // letterSpacing: 2,
    marginBottom: 40,
  },
  image: {
    padding: 5,
    marginRight: 5,
    borderRadius: (75 / 2),
    height: 75,
    width: 75
  },
  imageContainer: {
    flex: .5,
    alignItems: 'center',

    flexDirection: 'row',
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.LightGrey
  },
  button: {
    flex: .225,
    height: 25,
    width: 150,
    marginTop: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'steelblue',
    borderRadius: (75),
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: typography.fontMain,
    fontSize: 18,
  },
  presentedby:{
    color: colors.MediumGrey,
    fontFamily: typography.fontMain,
  }
})
