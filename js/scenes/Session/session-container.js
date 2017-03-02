import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux';
import { fetchSpeaker } from './../../redux/actions/fetchactions'
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
    this.props.fetchingSpeaker(this.props.sessionData.data.speaker);
  }
  render() {
    const {sessionData, speaker} = this.props
    const {data} = sessionData
    return (
      this.props.doneLoading?
      <Session data={data} speaker={speaker}/>
      :
      <Loading/>
    )
  }
}
SessionContainer.propTypes = {
  sessionData: React.PropTypes.object,
}
const mapDispatchToProps = dispatch => ({
  fetchingSpeaker: (speakerId) => dispatch(fetchSpeaker(speakerId)),
});

const mapStateToProps = (state) => {
  return {
    doneLoading: state.loading,
    speaker: state.speaker,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);