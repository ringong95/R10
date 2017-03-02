import React, { Component } from 'react';
import { ListView, Text, View, TouchableHighlight } from 'react-native'
import Faves from './faves'

class FavesContainer extends Component {
  componentDidMount() {
    // this.props.fetchingSchedule();
  }
  render() {
    return (
      <Faves />
    );
  };
}
export default FavesContainer;