import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, ScrollView, View, Image, TouchableHighlight, TouchableOpacity, Linking } from 'react-native'
import Speaker from './speaker'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from './../../config/styles';
import styles from './styles'
class SpeakerContainer extends Component {
  constructor() {
    super()
    this.goBack = this.goBack.bind(this);
  }
  goBack = () => {
    this.props.navigator.pop();
  }
  gotoWikipedia = (url) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }
  static route = {
    navigationBar: {
      title: 'About the speaker',
    }
  }
  render() {
    const { speaker } = this.props
    return (
      <ScrollView >
        <View style={styles.container} >
          <Image style={styles.image} source={{ uri: speaker.image }} />
          <Text style={styles.name} >  {speaker.name} </Text>
          <Text style={styles.bio} > {speaker.bio} </Text>
          <LinearGradient colors={[colors.Blue, colors.Purple]} style={styles.linearGradient} onPress={this.gotoWikipedia(speaker.url)}>
            <Text style={styles.buttonText}>See more on Wikipedia</Text>
          </LinearGradient>
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