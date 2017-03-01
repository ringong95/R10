import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import About from './about'
import Loading from './../../components/loading'
import { fetchConducts } from './../../redux/actions/fetchactions'

class AboutContainer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  componentDidMount() {
    this.props.fetchingConducts();
  }
  static route = {
    navigationBar: {
      title: 'About',
    }
  }
  render() {
    return (
      this.props.doneLoading ?
        <About conducts={this.props.conductList} />
        :
        <Loading />
    )
  }
}
const mapDispatchToProps = dispatch => ({
  fetchingConducts: () => dispatch(fetchConducts()),
});

const mapStateToProps = (state) => {
  return {
    doneLoading: state.loading,
    conductList: state.conducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
