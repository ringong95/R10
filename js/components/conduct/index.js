import React, { Component, propTypes } from 'react';
import { View, Text, LayoutAnimation, TouchableOpacity } from 'react-native'
import styles from './styles'

class Conduct extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  onPress = () => {
    const animationConfig = {
      duration: 500,
      update: {
        type: 'spring',
        springDamping: 1, // lower == more dramatic spring 
      },
    };

    LayoutAnimation.configureNext(animationConfig);
    this.setState({ open: !this.state.open })
  }
  render() {
    const {title, description} = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.header}>{this.state.open ? '+' : '-' } {title} </Text>
          {
            this.state.open &&
              <Text style={styles.text}> {description} </Text>
          }
        </TouchableOpacity>
      </View>
    )
  }
}
export { Conduct }