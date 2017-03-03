import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux';
import { fetchSpeaker, fetchFavSessions } from './../../redux/actions/fetchactions'
import Session from './session'
import Loading from './../../components/loading'
class SessionContainer extends Component {
  constructor() {
    super()
  }
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchSpeaker(this.props.sessionData.data.speaker))
  }
  render() {
    const {sessionData, speaker, faves} = this.props
    const {data} = sessionData
    return (
      this.props.doneLoading?
      <Session data={data} speaker={speaker} faves={faves}/>
      :
      <Loading/>
    )
  }
}
SessionContainer.propTypes = {
  sessionData: React.PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    doneLoading: state.loading,
    speaker: state.speaker,
    faves: state.Faves.dataBlob,

  };
};
export default connect(mapStateToProps)(SessionContainer);