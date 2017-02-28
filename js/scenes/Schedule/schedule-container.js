import React, { Component } from 'react';
import Schedule from './schedule';

export default class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }
  render() {


    return (
      <Schedule />
    )
  }
}