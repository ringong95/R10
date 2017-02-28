/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import About from './scenes/About/index'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

export default class R10 extends Component {
  render() {
    return (
      <ScrollView>
        <About />
      </ScrollView>
    );
  }
}

