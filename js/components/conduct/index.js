import React, { Component, propTypes } from 'react';
import { View, Text } from 'react-native'
import styles from './styles'

class Conduct extends Component {
  constructor({title, description}) {
    super()
  }i
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> {title} </Text>
        <Text style={styles.text}> {description} </Text>
      </View>
    )
  }
}
export { Conduct }