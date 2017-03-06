import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux';
import { fetchSpeaker, fetchFavSessions } from './../../redux/actions/fetchactions'
import Session from './session'
import Loading from './../../components/loading'
import realm from './../../config/model'
import Realm from 'realm';
class SessionContainer extends Component {
  constructor() {
    super()
    realm.addListener('change', () => {
      this.props.dispatch(fetchFavSessions({ formated: false, load: false }))
      this.props.dispatch(fetchFavSessions({ formated: true, load: false }))
    })
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
    
    const {sessionData, speaker, Faves } = this.props
    const {data} = sessionData
    return (
      this.props.doneLoading ?
        <Session data={data} speaker={speaker} faves={Faves} />
        :
        <Loading />
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
    Faves: state.Faves.unformated,

  };
};
export default connect(mapStateToProps)(SessionContainer);