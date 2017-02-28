import React, { Component } from 'react';
import Schedule from './schedule';

export default class ScheduleContainer extends Component {
  render() {


    return (
      this.state.isLoading ?
        <Loading />
        :
        <Schedule />

    )
  }
}