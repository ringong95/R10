import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native'
import { convertTime } from './../../lib/formatData'
import styles from './styles'
const Session = ({data, speaker}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{data.location}</Text>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.time}>{convertTime(data.start_time)}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.presentedby}>Presented By:</Text>
      <TouchableHighlight style={styles.imageContainer} onPress={() => console.log('ello')}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: speaker.image }} />
          <Text style={styles.name}>{speaker.name} </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => console.log('ello')}>
        <Text style={styles.buttonText}>FAVE ME</Text>
      </TouchableHighlight>
    </View >
  );
};

export default Session;