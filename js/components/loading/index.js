import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import styles from './styles'

export default Loading = ({title, description}) => {
  return (
    <View>
      <ActivityIndicator
        animating={true}
        style={[styles.centering, { height: 80 }]}
        size="large"
      />
    </View>
  )
}