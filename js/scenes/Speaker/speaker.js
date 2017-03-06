import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'


const Speaker = ({ navigation }) => {
  const goBack = () => {
    this.props.navigator.pop();
  }
  return (
    <View>
      <Text>
        Hi
    </Text>
      <Icon.Button name="ios-play-outline" backgroundColor="#3b5998" onPress={() => goBack()}>
        Login with Facebook
    </Icon.Button>
    </View>
  );
};

export default Speaker;