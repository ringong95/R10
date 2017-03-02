import React, { Component, propTypes } from 'react';
import { View, Text, LayoutAnimation, TouchableOpacity, Animated } from 'react-native'
import styles from './styles'

class Conduct extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      rotateValue: new Animated.Value(0)
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
    this.state.rotateValue.setValue(0);
    Animated.timing(
      this.state.rotateValue,
      { toValue: 1 },
      500000
    ).start()
    LayoutAnimation.configureNext(animationConfig);
    this.setState({ open: !this.state.open })
  }
  render() {
    let rotationValue = this.state.rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    let animationStyles = {
      transform: [
        { rotateY: rotationValue },
        // { rotateX: rotationValue },
        { rotateZ: rotationValue }
      ],
    }
    const {title, description} = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.titlecontainer}>
            <Animated.Text style={[styles.symbol, styles.header, animationStyles]}>{this.state.open ? '-' : '+'}</Animated.Text>
            <Text style={styles.header}> {title} </Text>
          </View>
              {
                this.state.open &&
                <Text style={styles.text}> {description} </Text>
              }
        </TouchableOpacity>
          </View>
          )
  }
}
export {Conduct}