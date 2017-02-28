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
      isLoading: true,
    };
  }
  componentDidMount() {
    this.props.fetchingConducts();
  }
  componentDidUpdate() {
    if (this.props.conductList.length && this.state.isLoading) {
      this.setState({ isLoading: false, });
    }
  }
  static route = {
    navigationBar: {
      title: 'About',
    }
  }
  render() {
    return (
      this.state.isLoading ?
        <Loading />
        :
        <About conducts={this.props.conductList} />
    )
  }
}
const mapDispatchToProps = dispatch => ({
  fetchingConducts: () => dispatch(fetchConducts()),
});

const mapStateToProps = (state) => {
  return {
    conductList: state.conducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
