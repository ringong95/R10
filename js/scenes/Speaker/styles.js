import { StyleSheet } from 'react-native';
import { colors, typography } from './../../config/styles';
export default StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    borderRadius: 75,
    width: 150,
  },
  name: {
    fontFamily: typography.fontMain,
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  bio: {
    fontFamily: typography.fontMainLight,
    fontSize: typography.baseSize,
    padding: 10,
    lineHeight: 30,
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
})