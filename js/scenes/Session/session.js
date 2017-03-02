import React from 'react';
import { Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import { convertTime } from './../../lib/formatData'
import styles from './styles'
import { goToSpeaker } from './../../lib/navigationHelper'
const Session = ({data, speaker}) => {
// this crashes when tyring to push onto root//
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{data.location}</Text>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.time}>{convertTime(data.start_time)}</Text> 
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.presentedby}>Presented By:</Text>
      <TouchableOpacity style={styles.imageContainer} onPress={() => goToSpeaker(speaker)}>
      
        <View style={styles.flexcity}>
          <Image style={styles.image} source={{ uri: speaker.image }} />
          <Text style={styles.name}>{speaker.name} </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('ello')}>
        <Text style={styles.buttonText}>FAVE ME</Text>
      </TouchableOpacity>
    </View >
  );
};

export default Session;