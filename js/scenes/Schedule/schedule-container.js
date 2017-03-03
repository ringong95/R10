import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native'
import Schedule from './schedule';
import { fetchSchedule, fetchFavSessions } from './../../redux/actions/fetchactions'
import Loading from './../../components/loading'
import styles from './styles.js'

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
    this.props.dispatch(fetchSchedule())
    this.props.dispatch(fetchFavSessions({ formated: false }))
  }
  render() {
    return (
      this.props.doneloading ?
        <Schedule dataSource={this.props.dataSource} currentNavigatorUID={'schedule'} Faves={this.props.unformatedFavs} />
        :
        <Loading />
    )
  }
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

const mapStateToProps = (state) => {
  return {
    dataSource: ds.cloneWithRowsAndSections(state.schedule.dataBlob, state.schedule.sectionIds, state.schedule.rowIds),
    doneloading: state.loading,
    unformatedFavs: state.Faves.unformated.map((Fave) =>Fave.session_id)
  };
};
// ScheduleContainer.prototype = {
//   fetchingSchedule: React.PropTypes.func,
//   doneloading: React.PropTypes.array,
//   dataSource: React.PropTypes.array,
// }

export default connect(mapStateToProps)(ScheduleContainer);