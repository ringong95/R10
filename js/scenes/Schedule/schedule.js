import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { convertTime } from './../../lib/formatData'
import styles from './styles.js'
import { goToSession } from './../../lib/navigationHelper'

const filterMatch = (faves, data)=>{

}
export default Schedule = ({dataSource, currentNavigatorUID, Faves}) => {
  console.log(Faves)
  return (
    <ListView
      style={styles.listView}
      dataSource={dataSource}
      renderRow={(data) => (
        <TouchableHighlight onPress={() => goToSession(
          currentNavigatorUID, { data }
        )}>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>{data.title}</Text>
              {
                Faves.includes(data.session_id) &&
                <Icon name="ios-heart" size={30} color="#900" />
              }

            </View>
            <Text style={styles.description}> {data.location}  </Text>
          </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={(sectionData, sectionText) => {
        return (
          <View style={styles.section}>
            <Text style={styles.sectionText}>{convertTime(sectionText)}</Text>
          </View>
        )
      }}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    />
  )
}