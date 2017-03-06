import { StyleSheet } from 'react-native';
import { typography, colors} from './../config/styles'
export const styles = StyleSheet.create({
  tabItemContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitleText: {
    fontSize: typography.baseSize,
    fontFamily: typography.fontMainLight
  },
  linearGradient: {
    flex: 1,
  },
  titleStyle: {
    color: colors.White,
    fontSize: 20,
    fontFamily: typography.fontMain,
    fontWeight: 'bold'
  },
});