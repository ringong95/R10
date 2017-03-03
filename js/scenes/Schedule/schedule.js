import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  View
} from 'react-native';
import { convertTime } from './../../lib/formatData'
import styles from './styles.js'
import { goToSession } from './../../lib/navigationHelper'

export default Schedule = ({dataSource, currentNavigatorUID}) => {
  return (
    <ListView
      style={styles.listView}
      dataSource={dataSource}
      renderRow={(data) => (
        <TouchableHighlight onPress={() => goToSession(
          currentNavigatorUID, { data }
        )}>
          <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
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