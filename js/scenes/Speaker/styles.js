import { StyleSheet } from 'react-native';
import { colors, typography } from './../../config/styles';
export default StyleSheet.create({
container:{
  // backgroundColor: 'black',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
image:{
  height: 150,
  borderRadius: 75,
  width: 150,
},
name:{
  fontFamily: typography.fontMain,
  fontSize: 25,
  textAlign: 'center',
  paddingTop: 10,
  paddingBottom: 10,
},
bio:{
fontFamily: typography.fontMainLight,
fontSize: typography.baseSize,
padding: 10,
lineHeight: 30,
}
})