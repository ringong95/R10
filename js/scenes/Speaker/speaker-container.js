import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, ScrollView, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import Speaker from './speaker'
import styles from './styles'
class SpeakerContainer extends Component {
  constructor() {
    super()
    this.goBack = this.goBack.bind(this);
  }
  goBack = () => {
    this.props.navigator.pop();
  }
   static route = {
    navigationBar: {
      title: 'About the speaker',
    }
  }
  render() {
    const {speaker} = this.props
    return (
      <ScrollView >
      <View style={styles.container} >
        <Image style={styles.image} source={{ uri: speaker.image }} />
        <Text style={styles.name} >  {speaker.name} </Text>
        <Text style={styles.bio} > {speaker.bio} </Text>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    speaker: state.speaker,
  };
};
export default connect(mapStateToProps)(SpeakerContainer);