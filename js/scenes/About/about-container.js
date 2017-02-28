import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import About from './about'
import Loading from './../../components/loading'

export default class AboutContainer extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then((response) => response.json())
      .then((result) => {
        this.setState({ dataSource: (result) });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
  componentDidUpdate() {
    if (this.state.dataSource.length && this.state.isLoading) {
      this.setState({ isLoading: false, });
    }
  }
  render() {

    return (
      this.state.isLoading ?
        <Loading />
        :
        <About conducts={this.state.dataSource} />

    )




  }
}

