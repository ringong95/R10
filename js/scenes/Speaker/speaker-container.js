import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import Speaker from './speaker'
class SpeakerContainer extends Component {
  constructor() {
    super()
    this.goBack = this.goBack.bind(this);
  }
  goBack = () => {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View>
        <Text>
          Hi
        </Text>
        <Icon.Button name="ios-play-outline" backgroundColor="#3b5998" onPress={this.goBack}>
          Login with Facebook
          </Icon.Button>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
  };
};
export default connect(mapStateToProps)(SpeakerContainer);