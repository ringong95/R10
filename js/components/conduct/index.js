import React from 'react';
import { View, Text } from 'react-native'
import styles from './styles'

export const Conduct = ({title, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> {title} </Text>
      <Text> {description} </Text>
    </View>
  )
}