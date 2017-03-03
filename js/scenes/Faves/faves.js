import React from 'react';
import { Text, View, Image, TouchableHighlight, TouchableOpacity, ListView} from 'react-native'
import { convertTime } from './../../lib/formatData'
import styles from './styles'
import { goToSpeaker } from './../../lib/navigationHelper'
import Fave, { FaveUpdate, FaveToggle } from './../../config/model'
import { goToSession } from './../../lib/navigationHelper'
export default FaveScene = ({dataSource, currentNavigatorUID}) => {
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