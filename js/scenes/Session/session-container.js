import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { convertTime } from './../../lib/formatData'

class SessionContainer extends Component {
  constructor() {
    super()
  }
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }
  render() {
    const {sessionData} = this.props
    console.log(sessionData)
    return (
      <View>
        <Text>{sessionData.data.location}</Text>
        <Text>{sessionData.data.title}</Text>
        <Text>{convertTime(sessionData.data.start_time)}</Text>
        <Text>{sessionData.data.description}</Text>
      </View>
    )
  }
}
SessionContainer.propTypes = {
  sessionData: React.PropTypes.object,
}
export default SessionContainer;