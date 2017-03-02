import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View, TouchableHighlight } from 'react-native'
import Schedule from './schedule';
import { formatSessionData, formatDataObject } from './../../lib/formatData'
import { fetchSchedule } from './../../redux/actions/fetchactions'
import Loading from './../../components/loading'
import styles from './styles.js'
import { convertTime } from './../../lib/formatData'
import { goToSession } from './../../lib/navigationHelper'
// import realm, { FaveQuery } from './../../config/model'

class ScheduleContainer extends Component {
  constructor() {
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
  }
  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }
  componentDidMount() {
    this.props.fetchingSchedule();
  }
  componentDidUpdate() {
  }
  render() {
    return (
      this.props.doneloading ?
        <ListView
          style={styles.listView}
          dataSource={this.props.dataSource}
          renderRow={(data) => (
            <TouchableHighlight onPress={() => goToSession(
              'schedule', { data }
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
        :
        <Loading />
    )
  }
}
const mapDispatchToProps = dispatch => ({
  fetchingSchedule: () => dispatch(fetchSchedule()),
});

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

const mapStateToProps = (state) => {
  return {
    dataSource: ds.cloneWithRowsAndSections(state.schedule.dataBlob, state.schedule.sectionIds, state.schedule.rowIds),
    schedule: state.schedule,
    doneloading: state.loading
  };
};
// ScheduleContainer.prototype = {
//   fetchingSchedule: React.PropTypes.func,
//   doneloading: React.PropTypes.array,
//   dataSource: React.PropTypes.array,
// }

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);