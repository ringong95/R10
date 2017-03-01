import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native'
import Schedule from './schedule';
import { formatSessionData, formatDataObject } from './../../lib/formatData'
import { fetchSchedule } from './../../redux/actions/fetchactions'
import Loading from './../../components/loading'
import styles from './styles.js'

class ScheduleContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
    };
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
    // console.log(formatDataObject(this.props.schedule))
    console.log(formatSessionData(this.props.schedule))
    if (this.props.schedule.length && this.state.isLoading) {
      this.setState({ isLoading: false, });
    }
  }
  render() {
    return (
      this.state.isLoading ?
        <Loading />
        :
        <ListView
          dataSource={this.ds.cloneWithRows(this.props.schedule)}
          renderRow={(data) => (
            <View style={styles.container}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.description}> {data.description}  </Text>
            </View>)
          }
          renderSectionHeader={(sectionData, sectionID) => {
            return (
              <View style={styles.section}>
                <Text style={styles.sectionText}>Title: {sectionID}</Text>
              </View>
            )
          }}
        />
    )
  }
}
const mapDispatchToProps = dispatch => ({
  fetchingSchedule: () => dispatch(fetchSchedule()),
});

const mapStateToProps = (state) => {
  return {
    schedule: state.schedule,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);