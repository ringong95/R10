import { StyleSheet } from 'react-native';
import { typography } from './../config/styles'
export const styles = StyleSheet.create({
  tabItemContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitleText: {
    fontSize: 15,
    fontFamily: typography.fontMainLight
  }
});